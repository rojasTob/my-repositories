import { getProjectsByUser } from './github-services';

describe('github-service', () => {
  describe('getProjectsByUser', () => {
    const data = [
      { id: 1, name: 'name1', fullname: 'fullname1', created_at: 'date1', updated_at: 'date2' },
      { id: 2, name: 'name2', fullname: 'fullname2', created_at: 'date1', updated_at: 'date2' }
    ]

    beforeEach(() => {
      fetch.mockResponse(JSON.stringify(data));
    });

    test('should call github api with correct username', () => {
      getProjectsByUser('username');

      expect(fetch.mock.calls.length).toEqual(1);
      expect(fetch.mock.calls[0][0]).toEqual('https://api.github.com/users/username/repos');
    });

    test('should return a ProjectByUserResponse', async () => {
      const response = await getProjectsByUser('username');
      expect(response.message).toBe('Found 2 repositories :)');
      expect(response.repositories[0]).toEqual({ name: 'name1', created_at: 'date1', updated_at: 'date2' });
      expect(response.repositories[1]).toEqual({ name: 'name2', created_at: 'date1', updated_at: 'date2' });
    });
  });
});