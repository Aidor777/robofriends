import { Robot } from "./types";

export interface AppStateProps {
  searchField: string;
  robots: Array<Robot>;
  isPending: boolean;
  error: any;
}

export interface AppDispatchProps {
  onSearchChange: (event: any) => any;
  onRequestRobots: () => any;
}

export type AppProps = AppStateProps & AppDispatchProps;
