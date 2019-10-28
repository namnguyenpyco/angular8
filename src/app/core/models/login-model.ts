export interface Login {
  name: string;
  password: string;
  age?: number;
  address?: Address;
}

export interface Address {
  city: string;
  country: string;
}
