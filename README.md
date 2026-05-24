# ResquAI

**Tactical Disaster Response Coordination System**

A production-grade full-stack platform for real-time emergency reporting, live incident monitoring, and dispatcher command operations.

## 🎯 Features

- **Citizen SOS Portal** - Emergency reporting with GPS, camera capture, and form validation
- **Dispatcher Command Center** - Real-time tactical map, incident queue, and status management
- **Live Statistics** - Dashboard with active incidents, response units, and resolved cases
- **Real-Time Sync** - 5-second polling for live incident updates
- **Tactical UI** - Cinematic military command center aesthetic with glassmorphism and neon effects

## 🏗️ Tech Stack

### Frontend
- React 19 + Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- React Query
- React Hook Form + Zod
- React Leaflet + OpenStreetMap
- Lucide React Icons

### Backend
- Express 5
- PostgreSQL
- Drizzle ORM
- Zod Validation

### DevOps
- pnpm workspace
- TurboRepo
- ESLint + Prettier
- TypeScript strict mode

## 🚀 Getting Started

### Prerequisites
- Node.js >= 20
- pnpm >= 9
- PostgreSQL >= 14

### Installation

```bash
# Clone repository
git clone https://github.com/Preetham453/resQemrg.git
cd resQemrg

# Install dependencies
pnpm install

# Configure environment
cp .env.example .env.local
```

### Database Setup

**Option 1: Docker (Recommended)**
```bash
docker run --name resquai-db \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=resquai \
  -p 5432:5432 \
  -d postgres:15
```

**Option 2: Local PostgreSQL**
```bash
createdb resquai
```

### Run Application

```bash
# Migrations and seed data
pnpm run db:migrate
pnpm run db:seed

# Start dev servers (frontend + backend)
pnpm run dev
```

**Access Points:**
- Frontend: http://blueorchids2k26.lovable.app
- Backend API: [http://localhost:3000/api](http://blueorchids2k26.lovable.app)
- Dashboard: [http://localhost:5173/dashboard](http://blueorchids2k26.lovable.app) (Password: `BLUEORCHIDS2K26`)

## 📋 Pages

### Home (/)
Landing page with live dashboard statistics and portal access cards.

### Citizen SOS Portal (/report)
Emergency reporting interface with:
- Multi-field form with validation
- Automatic geolocation
- Live tactical map
- Real-time camera capture
- Photo evidence transmission

### Dispatcher Command Center (/dashboard)
Command center with:
- Password-protected access
- 3-column tactical layout
- Incident queue sorted by severity
- Full-width tactical map
- Incident detail panel with status controls
- Real-time polling (5-second refresh)

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/incidents` | List all incidents |
| `POST` | `/api/incidents` | Create new incident |
| `GET` | `/api/incidents/:id` | Fetch incident details |
| `PATCH` | `/api/incidents/:id/status` | Update incident status |
| `PATCH` | `/api/incidents/:id/resolve` | Resolve incident |
| `GET` | `/api/dashboard/stats` | Dashboard statistics |
| `GET` | `/api/dashboard/recent` | Recent incidents |
| `GET` | `/api/health` | Health check |

## 🎨 Design System

**Dark Tactical Theme:**
- Background: `#060b12`
- Primary: `emerald-400`
- Warning: `amber-400`
- Critical: `red-400`
- Info: `sky-400`

**Components:**
- Glassmorphism cards
- Tactical grid backgrounds
- Soft neon glows
- Smooth animations
- Tactical corner brackets

## 🔐 Security

- Password-protected dispatcher dashboard
- Zod request validation on all endpoints
- TypeScript strict mode
- Environment variable isolation
- CORS enabled

## 📦 Build & Deploy

```bash
# Build all packages
pnpm run build

# Type check
pnpm run type-check

# Lint code
pnpm run lint

# Format code
pnpm run format
```

## 📊 Database

**Incidents Table Schema:**
- `id` - UUID primary key
- `reporterName` - Incident reporter
- `emergencyType` - Type of emergency (enum)
- `severity` - Severity level (enum)
- `status` - Current status (enum)
- `description` - Detailed description
- `latitude/longitude` - GPS coordinates
- `photoBase64` - Evidence photo
- `createdAt/updatedAt/resolvedAt` - Timestamps

**Auto-Severity Assignment:**
- Fire → Critical
- Structural Damage → Critical
- Flood → High
- Medical → High
- Other → Medium

## 🧪 Testing

```bash
# Run tests
pnpm run test
```

## 📝 License

MIT

## 🤝 Contributing

Contributions welcome! Please follow the code style guidelines and ensure all tests pass.

---

**ResquAI** - Empowering Emergency Response Teams with Tactical Intelligence
