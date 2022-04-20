export class RepoArray {
    id!: number;
    name!: string;
    size!: number;
    language: any;
    description!: string;
    stargazers_count!: number;
    watchers_count!: number;
    forks_count: number | undefined;
    fork!: boolean;
    html_url!: string;
  }