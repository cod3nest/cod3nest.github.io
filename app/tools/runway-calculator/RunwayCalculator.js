'use client'

import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

export default function RunwayCalculator() {
  const [cashOnHand, setCashOnHand] = useState(500000)
  const [monthlyBurn, setMonthlyBurn] = useState(30000)
  const [monthlyRevenue, setMonthlyRevenue] = useState(5000)
  const [expectedGrowth, setExpectedGrowth] = useState(10)
  const [leadEmail, setLeadEmail] = useState('')
  const [emailStatus, setEmailStatus] = useState({ state: 'idle', message: '' })

  const [results, setResults] = useState(null)

  useEffect(() => {
    calculateRunway()
  }, [cashOnHand, monthlyBurn, monthlyRevenue, expectedGrowth])

  const calculateRunway = () => {
    const netBurn = monthlyBurn - monthlyRevenue

    if (netBurn <= 0) {
      setResults({
        runwayMonths: Infinity,
        netBurn: netBurn,
        status: 'profitable',
        statusColor: 'green',
        message: 'Congratulations! You\'re cash flow positive.',
        fundraiseDate: null,
        zeroDate: null,
        projections: []
      })
      return
    }

    const runwayMonths = Math.floor(cashOnHand / netBurn)

    // Calculate projections with revenue growth
    const projections = []
    let remainingCash = cashOnHand
    let currentRevenue = monthlyRevenue
    let month = 0

    while (remainingCash > 0 && month < 36) {
      const currentNetBurn = monthlyBurn - currentRevenue
      projections.push({
        month: month,
        cash: remainingCash,
        revenue: currentRevenue,
        netBurn: currentNetBurn
      })
      remainingCash -= currentNetBurn
      currentRevenue = currentRevenue * (1 + expectedGrowth / 100)
      month++
    }

    // Determine status
    let status, statusColor, message
    if (runwayMonths >= 18) {
      status = 'healthy'
      statusColor = 'green'
      message = 'Your runway is healthy. Focus on growth and hitting milestones.'
    } else if (runwayMonths >= 12) {
      status = 'good'
      statusColor = 'emerald'
      message = 'Good runway. Start planning your fundraising strategy.'
    } else if (runwayMonths >= 9) {
      status = 'caution'
      statusColor = 'yellow'
      message = 'Time to start fundraising. Aim to close within 3-6 months.'
    } else if (runwayMonths >= 6) {
      status = 'warning'
      statusColor = 'orange'
      message = 'Warning: Start fundraising immediately or cut costs.'
    } else {
      status = 'critical'
      statusColor = 'red'
      message = 'Critical: Seek bridge financing or drastically cut expenses.'
    }

    // Calculate dates
    const today = new Date()
    const zeroDate = new Date(today)
    zeroDate.setMonth(zeroDate.getMonth() + runwayMonths)

    const fundraiseDate = new Date(today)
    fundraiseDate.setMonth(fundraiseDate.getMonth() + Math.max(0, runwayMonths - 9))

    setResults({
      runwayMonths,
      netBurn,
      status,
      statusColor,
      message,
      fundraiseDate,
      zeroDate,
      projections
    })
  }

  const sendProjection = async (e) => {
    e.preventDefault()
    if (!results || !leadEmail) return
    setEmailStatus({ state: 'sending', message: '' })
    const summary = [
      `Runway summary requested from the Codenest calculator`,
      `Cash on hand: ${formatCurrency(cashOnHand)}`,
      `Monthly burn: ${formatCurrency(monthlyBurn)}`,
      `Monthly revenue: ${formatCurrency(monthlyRevenue)} (growth ${expectedGrowth}%/month)`,
      results.runwayMonths === Infinity
        ? 'Status: cash flow positive'
        : `Runway: ${results.runwayMonths} months (cash-out ${formatDate(results.zeroDate)}; start fundraising by ${results.fundraiseDate ? formatDate(results.fundraiseDate) : 'now'})`,
    ].join('\n')
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          name: 'Runway Calculator Lead',
          email: leadEmail,
          company: '',
          engagement: 'fractional-cfo',
          message: summary,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      setEmailStatus({ state: 'sent', message: "Done — we'll send your 12-month projection to your inbox." })
      setLeadEmail('')
    } catch (error) {
      console.error('EmailJS Error:', error)
      setEmailStatus({ state: 'error', message: 'Sorry, that didn\'t send. Please try again or email hello@codenest.uk.' })
    }
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount)
  }

  const formatDate = (date) => {
    return date.toLocaleDateString('en-GB', {
      month: 'long',
      year: 'numeric'
    })
  }

  return (
    <div className="space-y-8">
      {/* Input Form */}
      <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Enter Your Numbers</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Cash on Hand
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">£</span>
              <input
                type="number"
                value={cashOnHand}
                onChange={(e) => setCashOnHand(Number(e.target.value))}
                className="w-full pl-8 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <p className="text-xs text-slate-500 mt-1">Your current bank balance</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Monthly Burn Rate
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">£</span>
              <input
                type="number"
                value={monthlyBurn}
                onChange={(e) => setMonthlyBurn(Number(e.target.value))}
                className="w-full pl-8 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <p className="text-xs text-slate-500 mt-1">Total monthly expenses (salaries, rent, tools, etc.)</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Monthly Revenue
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">£</span>
              <input
                type="number"
                value={monthlyRevenue}
                onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                className="w-full pl-8 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <p className="text-xs text-slate-500 mt-1">Current monthly recurring revenue</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Expected Monthly Revenue Growth
            </label>
            <div className="relative">
              <input
                type="number"
                value={expectedGrowth}
                onChange={(e) => setExpectedGrowth(Number(e.target.value))}
                className="w-full pl-4 pr-8 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">%</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">Month-over-month revenue growth rate</p>
          </div>
        </div>
      </div>

      {/* Results */}
      {results && (
        <div className="space-y-6">
          {/* Main Result */}
          <div className={`rounded-2xl p-8 ${
            results.statusColor === 'green' ? 'bg-green-50 border-green-200' :
            results.statusColor === 'emerald' ? 'bg-emerald-50 border-emerald-200' :
            results.statusColor === 'yellow' ? 'bg-yellow-50 border-yellow-200' :
            results.statusColor === 'orange' ? 'bg-orange-50 border-orange-200' :
            'bg-red-50 border-red-200'
          } border-2`}>
            <div className="text-center">
              <p className="text-sm font-medium text-slate-600 mb-2">Your Runway</p>
              <p className={`text-6xl font-bold mb-2 ${
                results.statusColor === 'green' ? 'text-green-700' :
                results.statusColor === 'emerald' ? 'text-emerald-700' :
                results.statusColor === 'yellow' ? 'text-yellow-700' :
                results.statusColor === 'orange' ? 'text-orange-700' :
                'text-red-700'
              }`}>
                {results.runwayMonths === Infinity ? '∞' : results.runwayMonths}
              </p>
              <p className="text-xl text-slate-600 mb-4">
                {results.runwayMonths === Infinity ? 'Cash flow positive' : 'months'}
              </p>
              <p className="text-slate-700">{results.message}</p>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <p className="text-sm text-slate-600 mb-1">Net Monthly Burn</p>
              <p className={`text-2xl font-bold ${results.netBurn <= 0 ? 'text-green-600' : 'text-slate-900'}`}>
                {formatCurrency(Math.abs(results.netBurn))}
                {results.netBurn <= 0 && <span className="text-sm font-normal text-green-600"> profit</span>}
              </p>
            </div>

            {results.zeroDate && results.runwayMonths !== Infinity && (
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <p className="text-sm text-slate-600 mb-1">Cash Runs Out</p>
                <p className="text-2xl font-bold text-slate-900">
                  {formatDate(results.zeroDate)}
                </p>
              </div>
            )}

            {results.fundraiseDate && results.runwayMonths !== Infinity && results.runwayMonths > 9 && (
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <p className="text-sm text-slate-600 mb-1">Start Fundraising By</p>
                <p className="text-2xl font-bold text-primary-600">
                  {formatDate(results.fundraiseDate)}
                </p>
              </div>
            )}
          </div>

          {/* Projection Chart */}
          {results.projections.length > 0 && results.runwayMonths !== Infinity && (
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Cash Projection (12 months)</h3>
              <div className="space-y-2">
                {results.projections.slice(0, 12).map((proj, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <span className="w-20 text-sm text-slate-600">Month {proj.month + 1}</span>
                    <div className="flex-1 bg-slate-100 rounded-full h-6 relative overflow-hidden">
                      <div
                        className={`h-6 rounded-full transition-all ${
                          proj.cash > cashOnHand * 0.5 ? 'bg-green-500' :
                          proj.cash > cashOnHand * 0.25 ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`}
                        style={{ width: `${Math.max(0, (proj.cash / cashOnHand) * 100)}%` }}
                      />
                    </div>
                    <span className="w-24 text-sm font-medium text-right">
                      {formatCurrency(Math.max(0, proj.cash))}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Email capture — CFO-intent lead */}
          <div className="bg-accent-50 rounded-2xl p-8 border border-accent-200">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Email me my 12-month projection</h3>
            <p className="text-sm text-slate-600 mb-4">
              We&apos;ll send this summary to your inbox — and if you want help extending your runway, our Fractional CFO service covers burn-rate optimisation and cash management.
            </p>
            {emailStatus.state === 'sent' ? (
              <p className="text-sm font-medium text-green-700">{emailStatus.message}</p>
            ) : (
              <form onSubmit={sendProjection} className="flex flex-col sm:flex-row gap-3">
                <label htmlFor="lead-email" className="sr-only">Email address</label>
                <input
                  id="lead-email"
                  type="email"
                  required
                  value={leadEmail}
                  onChange={(e) => setLeadEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-slate-900"
                />
                <button
                  type="submit"
                  disabled={emailStatus.state === 'sending'}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    emailStatus.state === 'sending'
                      ? 'bg-slate-400 text-white cursor-not-allowed'
                      : 'bg-accent-400 text-primary-900 hover:bg-accent-500 shadow-gold'
                  }`}
                >
                  {emailStatus.state === 'sending' ? 'Sending...' : 'Send My Projection'}
                </button>
              </form>
            )}
            {emailStatus.state === 'error' && (
              <p className="text-sm font-medium text-red-700 mt-2">{emailStatus.message}</p>
            )}
            {/* Privacy information at the point of collection (UK GDPR, Art. 13). */}
            <p className="text-xs text-slate-600 mt-3">
              We use your address only to send this projection and reply to you. See our{' '}
              <a href="/privacy/" className="underline hover:text-slate-800">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
