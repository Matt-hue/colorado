import { PropertyType } from '../models/property';
import { PropertyDetail } from '../models/room';
import { EnumToStringPipe } from './enum-to-string.pipe';

describe('EnumToStringPipe', () => {
  it('create an instance', () => {
    const pipe = new EnumToStringPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return the correct PropertyType name', () => {
    const pipe = new EnumToStringPipe();

    const result = pipe.transform(PropertyType.apartment, 'PropertyType');

    expect(result).toBe('apartment');
  });

  it('should return the correct RoomType name', () => {
    const pipe = new EnumToStringPipe();

    const result = pipe.transform(PropertyDetail.bathroom, 'RoomType');

    expect(result).toBe('toilet');
  });

  it('should throw if enum key does not exist', () => {
    const pipe = new EnumToStringPipe();
    try {
      pipe.transform(100, 'RoomType')      
    } catch (error) {
      expect(error).toBe('unable to convert enum key to string')
    }    
  });

});
