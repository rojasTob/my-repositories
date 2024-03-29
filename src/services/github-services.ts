const GITHUB_URL = 'https://api.github.com';

export interface ProjectByUserResponse {
  message: string;
  repositories: RepositoryData[];
}

export interface RepositoryData {
  name: string;
  created_at: string;
  updated_at: string;
}

const generateResponse = (message: string, repositories: []) => ({ message: message, repositories: repositories });

export const getProjectsByUser = (username: string): Promise<ProjectByUserResponse> => {
  const path = `/users/${username}/repos`;
  const url = [GITHUB_URL, path].join('');

  return fetch(url, { method: 'GET', headers: { 'Accept': 'application/vnd.github.inertia-preview+json' } })
    .then(response => response.json())
    .then(repositories => {

      if (repositories.message) {
        return Promise.reject(generateResponse('User not found :(', [])); //TODO handle error
      }

      const repos = repositories.map((repo: any) => ({ name: repo.name, created_at: repo.created_at, updated_at: repo.updated_at }));
      return Promise.resolve(generateResponse(`Found ${repos.length} repositories :)`, repos));
    })
    .catch(error => {
      const errorMessage = error.message || 'Something wrong happened when calling GitHub API';
      return Promise.reject({ error: errorMessage });
    });
}
