// Use Case 1 — Gym
import { LoginScreen as GymLogin } from "../screens/UseCase1Screen";
import { DashboardScreen as GymDashboard } from "../screens/UseCase1Screen";
import { MemberListScreen } from "../screens/UseCase1Screen";
import { AttendanceScreen } from "../screens/UseCase1Screen";
import { BillingScreen } from "../screens/UseCase1Screen";
import { ReportsScreen as GymReports } from "../screens/UseCase1Screen";

// Use Case 2 — Car/Bike
import { LoginScreen as CarLogin } from "../screens/UseCase2Screen";
import { DashboardScreen as CarDashboard } from "../screens/UseCase2Screen";
import { NewJobCardScreen } from "../screens/UseCase2Screen";
import { ServiceHistoryScreen } from "../screens/UseCase2Screen";
import { PartsInventoryScreen } from "../screens/UseCase2Screen";
import { FinalBillScreen } from "../screens/UseCase2Screen";

// Use Case 3 — Pharmacy
import { LoginScreen as PharmacyLogin } from "../screens/UseCase3Screen";
import { DashboardScreen as PharmacyDashboard } from "../screens/UseCase3Screen";
import { StockManagementScreen } from "../screens/UseCase3Screen";
import { NewBillScreen } from "../screens/UseCase3Screen";
import { SupplierPurchaseScreen } from "../screens/UseCase3Screen";
import { ReportsScreen as PharmacyReports } from "../screens/UseCase3Screen";


export const useCase1Data = {
    useCaseNo: 1,
    title: 'Gym & Fitness Management System',
    subTitle: 'Most local gyms track memberships on a notebook — renewals are missed and revenue walks out the door silently.',
    problem: 'Local gyms manage members, fees, and attendance manually on registers and Excel, so renewals go unnoticed until a member simply stops coming. This causes silent revenue loss and leaves owners with zero visibility into retention or peak hours.',
    targetUsers: [
        { title: 'Primary', subTitle: 'Gym Owner / Manager — oversees membership, fees, and staff' },
        { title: 'Secondary', subTitle: 'Front Desk Staff — handles check-in, fee collection, and enquiries' },
        { title: 'End Users', subTitle: 'Members — track their own attendance, plan, and renewal date' },
    ],
    features: [
        { title: 'Member Registration', subTitle: 'Plan, fee & photo capture in one form' },
        { title: 'Biometric / QR Attendance', subTitle: 'Biometric / QR attendance check-in system' },
        { title: 'Auto Renewal Alerts', subTitle: 'WhatsApp reminders 7 days & 1 day before expiry' },
        { title: 'Revenue Reports', subTitle: 'Daily/monthly collection charts & trends' },
        { title: 'Diet & Workout Plans', subTitle: 'Diet & workout plan assignment per member' },
    ],
    businessValue: [
        'Renewal reminders alone can recover 15–25% of lapsed members per month',
        'Digital attendance removes front-desk bottleneck at peak hours',
        'Revenue dashboards let owners spot slow months early and run targeted offers',
        'Member portal increases perceived value — members stay loyal to gyms with apps',
        'ROI visible within 1 month — even 5 member retentions cover software cost',
    ],
    whyInvest: 'A ₹15,000–₹40,000/yr software subscription easily pays for itself by recovering even one missed appointment per day. Patient retention improves with automated reminders, and insurance/GST billing compliance reduces legal risk.',
    wireFrame: [
        { name: 'Login', notes: ['Role selector — Admin / Staff / Member — shown above login', 'Forgot PIN sends OTP to registered mobile number', 'Logo + gym name dynamically loaded from admin settings'], Comp: GymLogin },
        { name: 'Dashboard', notes: ['Top row: Active Members / Today Check-ins / Revenue This Month', 'Renewal alert banner — expiring in 7 days, click to send WhatsApp reminder', "Bottom: today's attendance feed, live as members check in"], Comp: GymDashboard },
        { name: 'Member List', notes: ['Search by name / phone / member ID with real-time filter', 'Status badge: Active (green) / Expiring Soon (yellow) / Expired (red)', 'Row click → opens member detail sheet with full history'], Comp: MemberListScreen },
        { name: 'Attendance', notes: ['QR / Member Card scan auto-marks present with timestamp', 'Day pills show weekly streak — green = present, grey = absent', 'Live feed updates as members check in throughout the day'], Comp: AttendanceScreen },
        { name: 'Fee & Billing', notes: ['Auto-fills plan amount + GST based on selected member', 'Supports Cash / UPI / Card — receipt generated on confirm', 'Print button generates PDF receipt for the member'], Comp: BillingScreen },
        { name: 'Reports', notes: ['Date filter: Today / This Month / Custom range', 'Bar chart shows daily collection trend for the period', 'Export PDF / Excel for accountant or owner review'], Comp: GymReports },
    ],
}

export const useCase2Data = {
    useCaseNo: 2,
    title: 'Car & Bike Service Center System',
    subTitle: 'Service centers run job cards and parts inventory on paper — customer history disappears between visits.',
    problem: 'Service centers track job cards and parts on paper, so mechanics have no visibility into past repairs or warranty status on repeat visits. Manual inventory causes mid-job part shortages and billing errors.',
    targetUsers: [
        { title: 'Primary', subTitle: 'Workshop Owner / Service Manager — oversees job cards, billing, and parts' },
        { title: 'Secondary', subTitle: 'Mechanic / Technician — updates job status and parts used per vehicle' },
        { title: 'End Users', subTitle: 'Customers — receive status updates, estimates, and service reminders' },
    ],
    features: [
        { title: 'Digital Job Cards', subTitle: 'Vehicle details and complaint captured digitally' },
        { title: 'Service History', subTitle: 'Full repair history by registration number' },
        { title: 'Parts Inventory', subTitle: 'Low-stock alerts and auto-reorder suggestions' },
        { title: 'Status Updates', subTitle: 'Real-time Received → In Progress → Ready tracking' },
    ],
    businessValue: [
        'Service reminders bring back 30–40% of one-time customers as repeat visitors',
        'Digital estimates eliminate disputes — customer approves before work begins',
        'Parts inventory prevents mid-job delays and reduces over-purchasing by 20%',
        'Service history builds customer trust — "you serviced my car 3 times" is powerful',
        'Faster billing at delivery reduces customer wait time and frees counter staff',
    ],
    whyInvest: 'A digital job card and inventory system pays for itself by preventing even a handful of mid-job part shortages and billing disputes each month. Repeat-visit reminders turn one-time customers into long-term recurring revenue.',
    wireFrame: [
        { name: 'Login', notes: ['Role-based — Owner login shows full financials; Mechanic login shows only assigned jobs', 'PIN or password — 4-digit PIN option for quick counter access on shared tablet', 'Workshop logo and name set during initial setup — white-labelled appearance'], Comp: CarLogin },
        { name: 'Dashboard', notes: ['Stats: Jobs Today / Pending / Ready for Delivery / Revenue Today', 'Job pipeline list: color-coded by status (red=new, yellow=in progress, green=ready)', 'Prominent "+ New Job Card" CTA — most used action should be fastest to reach'], Comp: CarDashboard },
        { name: 'New Job Card', notes: ['Vehicle reg. number auto-fills customer name and vehicle details from database', 'Complaint / work requested — free text with voice-to-text support', 'Mechanic assignment dropdown — only shows available technicians at that time'], Comp: NewJobCardScreen },
        { name: 'Service History', notes: ['Search by registration number or customer name — instant lookup', 'Each card: service date / work done / parts used / total charged / mechanic', 'Expand any card to see full job card — useful for warranty and repeat issues'], Comp: ServiceHistoryScreen },
        { name: 'Parts Inventory', notes: ['Low stock alert banner — parts below reorder threshold highlighted in red', 'Columns: Part Name / Stock Qty / Reorder Level / Unit Price — sortable', 'Parts automatically deducted from inventory when marked as used in a job card'], Comp: PartsInventoryScreen },
        { name: 'Final Bill', notes: ['Bill auto-generated from job card: labor charges + parts used + GST', 'Send bill to customer via WhatsApp before pickup — reduces counter queue', '"Mark Paid" changes job status to Delivered and locks the bill from editing'], Comp: FinalBillScreen },
    ],
}

export const useCase3Data = {
    useCaseNo: 3,
    title: 'Pharmacy & Medical Store Management System',
    subTitle: 'Small pharmacies track stock and expiry on paper — expired medicines reach customers, stock-outs cost daily revenue.',
    problem: 'Independent pharmacies manage hundreds of medicine batches on paper, so expiry dates go untracked, creating real health and legal risk. Stock-outs happen without warning and billing is slow with manual GST calculation.',
    targetUsers: [
        { title: 'Primary', subTitle: 'Pharmacy Owner / Pharmacist — manages stock, billing, purchasing, and compliance' },
        { title: 'Secondary', subTitle: 'Counter Staff — handles billing and stock updates during the day' },
        { title: 'End Users', subTitle: 'Customers — optional loyalty card / prescription history portal' },
    ],
    features: [
        { title: 'Batch & Expiry Tracking', subTitle: 'Stock managed by batch with expiry alerts at 30/15/7 days' },
        { title: 'Low Stock Alerts', subTitle: 'Auto purchase order suggestions before stock-outs' },
        { title: 'Barcode Billing', subTitle: 'Fast POS with GST auto-applied by medicine category' },
        { title: 'Sales Reports', subTitle: 'Daily/monthly reports with most-sold medicines' },
    ],
    businessValue: [
        'Expiry tracking prevents legal penalties — selling expired medicine is a criminal offence under Drugs Act',
        'Low-stock alerts eliminate lost sales — every stock-out is a direct revenue loss',
        'Faster billing reduces customer wait time — critical for busy morning rush',
        'GST auto-calculation removes filing errors and CA dependency for monthly returns',
        'Purchase history reveals top-selling medicines — smarter bulk buying at better margins',
    ],
    whyInvest: 'A digital stock and billing system pays for itself by preventing even one expired-batch sale or stock-out per month, while GST automation cuts accountant dependency and filing errors.',
    wireFrame: [
        { name: 'Login', notes: ['Owner vs Counter Staff roles — staff cannot access financial reports or delete stock', 'Drug License number stored in system — auto-stamped on all purchase orders and bills', 'Session auto-logs out after 30 min of inactivity — required for compliance on shared devices'], Comp: PharmacyLogin },
        { name: 'Dashboard', notes: ["KPIs: Today's Sales / Pending Bills / Expiring Soon / Low Stock Items", 'Red alert: medicines with batch expiry in under 15 days — needs immediate action', 'Yellow alert: medicines below reorder level — shows recommended purchase quantity'], Comp: PharmacyDashboard },
        { name: 'Stock Management', notes: ['Columns: Medicine Name / Batch No. / Expiry Date / Qty / MRP — color-coded expiry', 'Expiry column: red = expired/<15d, yellow = <30d, green = safe', 'Add Batch form captures: supplier, batch number, qty, purchase price, MRP, expiry'], Comp: StockManagementScreen },
        { name: 'New Bill / POS', notes: ['Barcode scan or medicine name search — auto-fills batch, MRP, expiry, and GST rate', 'Bill items list — quantity editable; system automatically deducts from nearest-expiry batch (FEFO)', 'Summary: Subtotal / Discount / GST / Total — print thermal receipt or PDF'], Comp: NewBillScreen },
        { name: 'Supplier & Purchase', notes: ['Supplier list with contact, credit terms, and last order date — one tap to reorder', 'Status badge: Received (green) / Pending Delivery (yellow) for active purchase orders', 'System auto-suggests reorder quantities based on average daily sales of each medicine'], Comp: SupplierPurchaseScreen },
        { name: 'Reports', notes: ['Sales chart: daily revenue bar graph — identify high-traffic days for staffing', 'KPIs: Total Sales / Top Selling Medicine / GST Collected / Profit Margin', 'GST Report tab exports GSTR-1 ready file — saves accountant time every month'], Comp: PharmacyReports },
    ],
}