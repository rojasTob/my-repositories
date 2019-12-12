import { getProjectsByUser, ProjectByUserResponse } from './github-services';

describe('github-service', () => {
  describe('getProjectsByUser', () => {

    beforeEach(() => {
      fetch.resetMocks();
    })

    describe('when API responds successfully', () => {
      const data = [
        { id: 1, name: 'name1', fullname: 'fullname1', created_at: 'date1', updated_at: 'date2' },
        { id: 2, name: 'name2', fullname: 'fullname2', created_at: 'date1', updated_at: 'date2' }
      ]

      beforeEach(() => {
        fetch.mockResponse(JSON.stringify(data));
      });

      test('calls github api with correct username', () => {
        getProjectsByUser('username');

        expect(fetch.mock.calls.length).toEqual(1);
        expect(fetch.mock.calls[0][0]).toEqual('https://api.github.com/users/username/repos');
      });

      test('returns a ProjectByUserResponse data', async () => {
        const response: ProjectByUserResponse = await getProjectsByUser('username');
        expect(response.message).toBe('Found 2 repositories :)');
        expect(response.repositories[0]).toEqual({ name: 'name1', created_at: 'date1', updated_at: 'date2' });
        expect(response.repositories[1]).toEqual({ name: 'name2', created_at: 'date1', updated_at: 'date2' });
      });
    });

    describe('when API not found repositories', () => {
      test('rejects with a "Not Found User" error message ', async () => {
        fetch.mockResponse(JSON.stringify({ message: 'Not Found' }));

        await expect(getProjectsByUser('user_not_exists')).rejects.toEqual({ error: 'User not found :(' });
      });

      test('rejects an ', async () => {
        fetch.mockReject({ error: 'cannot connect to the API' });

        await expect(getProjectsByUser('username')).rejects.toEqual({ error: 'Something wrong happened when calling GitHub API' });
      });
    });
  });
});