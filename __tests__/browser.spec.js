const cookie = require('./browser');

describe('cookie', () => {
  it('should be available', () => {
    expect(cookie).toBeObject();
  });

  describe('get', () => {
    it('should be null when key does not exist', () => {
      expect(cookie.get('someInexistentKey')).toBeNull();
    });
  });

  describe('set', () => {
    it('should store a value in a key', () => {
      cookie.set('someKey', 'someValue');

      expect(cookie.get('someKey')).toBe('someValue');
    });

    it('should store boolean as string', function() {
      cookie.set('someKey', false );

      expect(cookie.get('someKey')).toBeString();
      expect(cookie.get('someKey')).toBe('false');
    });

    it('should store number as string', function() {
      cookie.set('someKey', 1234 );

      expect(cookie.get('someKey')).toBeString();
      expect(cookie.get('someKey')).toBe('1234');
    });
  });

  describe('removeItem', () => {
    it('should remove a key from storage', () => {
      cookie.set('someKey1', 'someValue1');
      cookie.removeItem('someKey1');

      expect(cookie.get('someKey1')).toBeNull();
    });
  });

  describe('clear', () => {
    it('should remove all keys from storage', () => {
      cookie.set('someKey1', 'someValue1');
      cookie.set('someKey2', 'someValue2');
      cookie.set('someKey3', 'someValue3');

      cookie.clearAll();

      expect(cookie.length).toBe(0);
    });
  });

  describe('get', () => {
    beforeEach(function() {
      cookie.clearAll();
    });

    it('should get the nth key from storage', () => {
      cookie.set('someKey1', 'someValue1');
      cookie.set('someKey2', 'someValue2');
      cookie.set('someKey3', 'someValue3');

      expect(cookie.get(2)).toBe('someKey3');
    });

    it('should return null when n is out of range', function() {
      cookie.set('someKey1', 'someValue1');
      cookie.set('someKey2', 'someValue2');

      expect(cookie.get(5)).toBeNull();
    });

  });

});
