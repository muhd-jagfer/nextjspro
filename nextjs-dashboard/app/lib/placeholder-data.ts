// This file contains placeholder data that is used to seed the database.
import { Invoice, Customer, Revenue, User } from './definitions';

const users: User[] = [
  {
    id: '410544b2-4001-4271-9855-fcc4b32e3ad8',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const customers: Customer[] = [
  {
    id: '3958dc9e-712f-404b-b9d5-ee22a1ea7f0f',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-404b-b9d5-ee22a1ea7f0f',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '3958dc9e-782f-404b-b9d5-ee22a1ea7f0f',
    name: 'Hector Simpson',
    email: 'hector@simpson.com',
    image_url: '/customers/hector-simpson.png',
  },
  {
    id: '50ca3e18-62cd-11ec-8d3d-0242ac130003',
    name: 'Steven Tey',
    email: 'steven@tey.com',
    image_url: '/customers/steven-tey.png',
  },
  {
    id: '3958dc9e-712f-404b-b9d5-ee22a1ea7f0f',
    name: 'Krish Gee',
    email: 'krish@gee.com',
    image_url: '/customers/krish-gee.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-0fd5b1765fa9',
    name: 'Brent Simmons',
    email: 'brent@simmons.com',
    image_url: '/customers/brent-simmons.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Gilbert Jones',
    email: 'gilbert@jones.com',
    image_url: '/customers/gilbert-jones.png',
  },
];

const invoices: Invoice[] = [
  {
    customer_id: customers[0].id,
    amount: 15995,
    status: 'pending',
    date: '2024-12-06',
    id: '13D07535-C59E-4157-A011-F8D2EF4B0DFE',
  },
  {
    customer_id: customers[1].id,
    amount: 13250,
    status: 'pending',
    date: '2024-12-01',
    id: '1F4E95C6-6AB2-4DB3-A130-34A536B0DDA1',
  },
  {
    customer_id: customers[4].id,
    amount: 250,
    status: 'paid',
    date: '2024-11-17',
    id: '27F1015C-7E23-4B7B-9FB5-C2989854F821',
  },
];

const revenue: Revenue[] = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3900 },
  { month: 'Dec', revenue: 4800 },
];

export { users, customers, invoices, revenue };
