import { describe, expect, it } from 'vitest';
import { skills } from '@/lib/portfolio';

describe('Portfolio skills', () => {
  it('includes every technology already listed in career and projects exactly once', () => {
    expect([...skills].sort()).toEqual([
      'C#', 'JavaScript', 'jQuery', 'HTML', 'CSS', 'SQL Server',
      'Azure DevOps', 'Entity Framework', 'Dapper', 'VB.NET', '.NET MAUI',
      'PostgreSQL', 'CI/CD', 'Google Firebase', 'Selenium', 'Browser automation', 'Azure AI',
    ].sort());
  });
});