# SysMon Dashboard

SysMon Dashboard is a web-based application built with React for monitoring system logs and metrics in real time. It provides a terminal-like interface for viewing live logs, filtering logs based on time ranges, and visualizing system metrics using charts. The application supports infinite scrolling, log pagination, and custom time-range selection.

## Features

### Logs
1. **Terminal-Like View:** Renders logs in a terminal-like interface.
2. **Time Range Quick Selection:** Provides options for selecting logs from the last `{n}` minutes/hours and supports custom time range selection.
3. **Live Logs Subscription:** Automatically fetches and displays new logs as they arrive.
4. **Autoscroll and Pagination:** Autoscrolls when new logs arrive, supports infinite scrolling, and paginates when scrolling up.
5. **Log Count Below Fold:** Displays the count of new logs below the fold and scrolls to the latest logs when clicked.
6. **Shareable URL:** All states of logs (filters) are reflected in the URL for sharing purposes.

### Metrics
1. **Interactive Charts:** Displays four charts (line and area charts) to visualize system metrics using Chart.js.
2. **Time Range Filtering:** Allows filtering of metrics by time range similar to logs.
3. **Draggable Selection:** Allows selecting and dragging over chart sections to check logs for the corresponding time range.
4. **Shareable URL:** All states of metrics (filters) are reflected in the URL for sharing purposes.


## Libraries Used
- **React**: ^17.x
- **React Router DOM**: ^6.x
- **React-Chartjs-2**: ^4.x
- **TailwindCSS**: ^3.x

## Getting Started

### Prerequisites
- Node.js (v14 or above)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/Frontend-Assignment.git
   cd Frontend-Assignment


Additional Notes
If any icons/assets are missing, export them from the provided Figma file.
For APIs, use the provided data generators to mimic real API calls for logs and metrics.
License
This project is licensed under the MIT License - see the LICENSE file for details.
