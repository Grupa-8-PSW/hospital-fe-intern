export default interface Patient{
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  pin: string, 
  gender: Gender,
  bloodType: BloodType
}

export enum Gender { MALE, FEMALE }

export enum BloodType { ZERO_POSITIVE, ZERO_NEGATIVE, A_POSITIVE, A_NEGATIVE, B_POSITIVE, B_NEGATIVE, AB_POSITIVE, AB_NEGATIVE }