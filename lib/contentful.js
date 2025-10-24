// lib/contentful.js
import { createClient } from 'contentful';

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID, // You'll get this from Contentful
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, // You'll get this from Contentful
});

console.log('SPACE_ID:', process.env.CONTENTFUL_SPACE_ID); // just for debug
console.log('ACCESS_TOKEN:', process.env.CONTENTFUL_ACCESS_TOKEN);