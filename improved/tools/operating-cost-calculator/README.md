# Operating Cost Calculator

Interactive tool that calculates annual operating costs for private jets.

## Features

### 1. Aircraft Selection
Users can select from 8 different aircraft across 4 categories:

**Light Jets:**
- Citation CJ3+ (€250k-350k/year)
- Phenom 300 (€280k-380k/year)

**Midsize Jets:**
- Citation XLS+ (€450k-600k/year)
- Hawker 900XP (€500k-650k/year)

**Super Midsize Jets:**
- Challenger 350 (€800k-1.1M/year)
- Citation Sovereign (€750k-950k/year)

**Large Jets:**
- Gulfstream G650 (€2.5M-3.5M/year)
- Global 7500 (€3M-4M/year)

### 2. Real-Time Cost Calculation

The calculator instantly computes costs as users change inputs:
- **Fuel Costs**: Based on consumption (liters/hour) × fuel price (€4.00/liter) × annual hours
- **Maintenance**: Fixed annual costs + variable costs per flight hour
- **Crew Salaries**: 2 pilots for light/midsize, 3 for large jets (€90k-120k per pilot)
- **Hangar & Parking**: €3k-10k per month depending on aircraft size
- **Insurance**: 1.5-1.9% of hull value annually
- **Management Fees**: Professional aircraft management services
- **Miscellaneous**: Charts, landing fees, catering, navigation fees

### 3. Visual Cost Breakdown

Each cost category displays:
- Absolute amount in EUR
- Percentage bar showing proportion of total costs
- Real-time updates when inputs change

### 4. Charter Comparison

Shows:
- Estimated annual charter cost for same flight hours
- Break-even point (hours/year where ownership becomes more economical)

### 5. Lead Capture

After calculation, users can request a personalized analysis:
- Form fields: name, email, phone (optional)
- Submissions saved to Supabase `tool_submissions` table
- Includes all calculation inputs and results
- Tracking: Meta Pixel Lead event + Google Analytics conversion

## Technical Details

### Cost Data Sources

All costs are based on Netherlands 2026 market data:
- **Fuel**: €4.00/liter (Jet-A1, average EU price)
- **Maintenance**: 5-8% of acquisition price per year
- **Crew**: €90k-120k per pilot/year (Netherlands market rates)
- **Hangar**: €2k-10k/month (varies by airport: Schiphol > Rotterdam > regional)
- **Insurance**: 1.5-1.9% of hull value (Netherlands aviation insurance rates)

### Data Structure

Each aircraft in `aircraftData` object contains:
```javascript
{
    name: 'Aircraft Name',
    category: 'Light Jet / Midsize Jet / etc.',
    fuelConsumption: 180, // liters per hour
    fuelPrice: 4.00, // EUR per liter
    maintenanceFixed: 50000, // annual fixed
    maintenanceVariable: 400, // per flight hour
    crewCount: 2,
    crewSalaryPerPilot: 90000,
    hangarMonthly: 3000,
    insuranceRate: 0.015, // 1.5% of hull value
    hullValue: 8000000,
    managementFee: 75000,
    miscAnnual: 40000,
    charterRatePerHour: 3500
}
```

### Supabase Integration

Submissions are stored in the `tool_submissions` table:
```javascript
{
    tool_type: 'operating_cost_calculator',
    name: 'User Name',
    email: 'user@example.com',
    phone: '+31 6 1234 5678',
    inputs: {
        aircraft: 'Citation CJ3+',
        category: 'Light Jet',
        annual_hours: 200
    },
    results: {
        fuelCost: 144000,
        maintenanceCost: 130000,
        // ... all calculated values
        totalAnnualCost: 550000
    },
    submitted_at: '2026-02-09T15:30:00Z'
}
```

### Tracking Events

**Page Load:**
- Meta Pixel: `PageView`
- Google Analytics: automatic pageview

**First Calculation:**
- Meta Pixel: `ViewContent` with total annual cost value
- Event triggered on first input change

**Lead Submission:**
- Meta Pixel: `Lead` event with cost value
- Google Analytics: `conversion` event with value
- Enables retargeting and conversion tracking

## SEO & Schema.org

### Structured Data

1. **WebPage** - Page information
2. **SoftwareApplication** - Calculator tool metadata
3. **BreadcrumbList** - Navigation breadcrumbs

### Meta Tags

- Bilingual hreflang tags (NL/EN)
- Open Graph for social sharing
- Twitter Card
- Canonical URL

## File Structure

```
tools/operating-cost-calculator/
├── index.html          # Main calculator page (self-contained)
└── README.md          # This file

database/
├── migrations/
│   └── 001_create_tool_submissions.sql
└── README.md
```

## Usage

### Local Development

1. Ensure Supabase credentials are in `.env.local`:
```
VITE_SUPABASE_URL=https://qwsnxkmiubhgbhwglpgu.supabase.co
VITE_SUPABASE_ANON_KEY=your_key_here
```

2. Open in browser:
```
http://localhost:5173/tools/operating-cost-calculator/
```

### Production

1. Deploy to production server
2. Ensure database table exists (run migration)
3. Verify tracking scripts are firing
4. Test form submission

### Testing Checklist

- [ ] Calculator loads without errors
- [ ] Changing aircraft updates all costs
- [ ] Changing hours updates variable costs
- [ ] Cost bars animate correctly
- [ ] Lead form appears after calculation
- [ ] Form submission saves to database
- [ ] Success message displays
- [ ] Tracking events fire (check Pixel Helper / GA Debug)
- [ ] Mobile responsive design works
- [ ] All links in header/footer work

## Future Enhancements

Potential additions:
- Export results as PDF report
- Email results to user automatically
- Compare multiple aircraft side-by-side
- Advanced options (financing, depreciation, tax benefits)
- Currency converter (EUR/USD/GBP)
- Save calculations for later
- Historical cost trends graph

## Support

For questions or issues:
- Technical: Review browser console for errors
- Database: Check Supabase logs
- Tracking: Use Meta Pixel Helper extension
- Contact: Contact@jetselect.nl
