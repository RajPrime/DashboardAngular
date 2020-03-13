export interface dashboard {
  headerInfo: headerInfo;
  totalQuotesBarChartData: chartData[];
  totalTaskBarChartData: chartData[];
}
export interface headerInfo {
  totalQuotes: number;
  activeQuotes: number;
  totalTasks: number;
  errorQuotes: number;
}
export interface chartData {
  label: string;
  value: string;
}
