import { dataSource } from '@external/orm';

export default async () => {
  try {
    dataSource.initialize().then(()=> console.log('database connected!'));
  } catch (error) {
    console.log('Database not connected!');
    console.log(error);
  }
};
