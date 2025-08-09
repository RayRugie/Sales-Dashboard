# Sales Dashboard

A modern, responsive sales dashboard built with Next.js, TypeScript, and Tailwind CSS. This dashboard provides real-time analytics and insights for sales performance, featuring interactive charts, metric cards, and a comprehensive product management system.

![Sales Dashboard](https://img.shields.io/badge/Next.js-15.4.6-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Chart.js](https://img.shields.io/badge/Chart.js-4.0-FF6384?style=for-the-badge&logo=chart.js)

## 🚀 Features

### 📊 Analytics Dashboard
- **Real-time Metrics**: Sales, Customers, Products, and Revenue tracking
- **Interactive Charts**: Bar charts, line charts, and progress rings
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark Theme**: Modern dark UI with excellent contrast and readability

### 📱 Mobile Responsive
- **Mobile-First Design**: Optimized for iPhone 12 Pro and similar devices
- **Touch-Friendly**: Proper touch targets and spacing for mobile interaction
- **Stacked Layout**: Components stack vertically on mobile for optimal viewing
- **Collapsible Sidebar**: Mobile overlay sidebar with hamburger menu

### 🎨 UI Components
- **Metric Cards**: Display key performance indicators with growth percentages
- **Sales Charts**: Interactive bar charts with time-based data
- **Progress Rings**: Visual progress indicators for ratings and orders
- **Product Tables**: Comprehensive product management with stock levels
- **Navigation**: Collapsible sidebar with category organization

### 🔧 Technical Features
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Chart.js**: Interactive and responsive charts
- **Next.js 15**: Latest features with App Router and Turbopack
- **Responsive Breakpoints**: Optimized for all screen sizes

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sales-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the dashboard.

## 📁 Project Structure

```
sales-dashboard/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with viewport configuration
│   │   ├── page.tsx            # Main dashboard page
│   │   ├── globals.css         # Global styles
│   │   └── favicon.ico         # App icon
│   ├── components/
│   │   ├── dashboard/          # Dashboard-specific components
│   │   │   ├── MetricsCards.tsx    # KPI metric cards
│   │   │   ├── SalesChart.tsx      # Main sales chart
│   │   │   ├── EarningCard.tsx     # Earnings widget
│   │   │   ├── OrdersCard.tsx      # Orders widget
│   │   │   ├── RatingCard.tsx      # Rating progress ring
│   │   │   ├── ClosedOrders.tsx    # Closed orders widget
│   │   │   └── ProductsTable.tsx   # Product management table
│   │   ├── layout/             # Layout components
│   │   │   ├── DashboardLayout.tsx # Main layout wrapper
│   │   │   ├── Header.tsx          # Top navigation header
│   │   │   ├── Sidebar.tsx         # Collapsible sidebar
│   │   │   └── IconSidebar.tsx     # Icon navigation sidebar
│   │   └── ui/                 # Reusable UI components
│   │       ├── Button.tsx          # Button component
│   │       ├── Card.tsx            # Card wrapper component
│   │       └── Chart.tsx           # Chart wrapper component
│   ├── lib/                    # Utility libraries
│   │   ├── chartConfig.ts      # Chart.js configuration
│   │   └── mockData.ts         # Sample data for development
│   └── types/                  # TypeScript type definitions
│       ├── Card.ts             # Card component types
│       └── SideBar.ts          # Sidebar component types
├── public/                     # Static assets
│   ├── icons/                  # SVG icons
│   └── images/                 # Images and avatars
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

## 🎯 Key Components

### Dashboard Layout
- **Responsive Design**: Adapts to desktop, tablet, and mobile screens
- **Sidebar Navigation**: Collapsible sidebar with category organization
- **Header**: Search functionality and user profile management
- **Mobile Overlay**: Touch-friendly mobile navigation

### Analytics Components
- **Metrics Cards**: Display key performance indicators with growth trends
- **Sales Chart**: Interactive bar chart showing sales and returns data
- **Progress Rings**: Visual indicators for ratings and completion rates
- **Product Table**: Comprehensive product management with stock tracking

## 📱 Responsive Breakpoints

| Device | Breakpoint | Layout |
|--------|------------|---------|
| Mobile | < 1024px | Stacked vertical layout |
| Tablet | 1024px - 1280px | Hybrid layout |
| Desktop | > 1280px | Full grid layout |

## 🎨 Design System

### Colors
- **Primary**: Dark theme with gray-900 backgrounds
- **Accent**: Blue (#3b82f6) for interactive elements
- **Success**: Green (#10b981) for positive metrics
- **Warning**: Orange (#f59e0b) for attention items
- **Error**: Red (#ef4444) for critical alerts

### Typography
- **Font Family**: Geist Sans (optimized by Next.js)
- **Headings**: Bold weights for hierarchy
- **Body**: Regular weights for readability
- **Responsive**: Scales appropriately across devices

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with zero configuration

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Development

### Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type checking
npm run type-check
```

### Environment Variables

Create a `.env.local` file for local development:

```env
# Add any environment variables here
NEXT_PUBLIC_API_URL=your_api_url_here
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js** for the amazing React framework
- **Tailwind CSS** for the utility-first CSS framework
- **Chart.js** for interactive charting capabilities
- **Lucide React** for beautiful icons
- **Vercel** for deployment platform

## 📞 Support

If you have any questions or need help with the project:

1. Check the [Issues](../../issues) page for existing solutions
2. Create a new issue with detailed information
3. Contact the maintainers directly

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
