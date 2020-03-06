
export interface dashboard {
  activeQuotes: number;
  totalTasks: number;
  totalQuotes: number;
  totalQuotesBarChartData: chartData[];
  plgApprovedQuotesPieChartData: chartData[];
  totalTaskBarChartData: chartData[];
  plgApprovedTasksPieChartData: chartData[];
}



export interface chartData {
  key: string|null;
  label: string;
  value: string;
}
