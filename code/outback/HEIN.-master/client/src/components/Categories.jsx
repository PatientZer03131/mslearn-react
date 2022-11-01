import React from 'react';

import Categorie from './Categorie';

const Categories = () => {
  return (
    <section className='p-8' id='categories'>
      <div className='grid gap-2 md:grid-cols-3 mb-2'>
        <Categorie
          name='Caravan Parks'
          image='https://images.unsplash.com/photo-1596470692137-ead1053a1e5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        />
        <Categorie
          name='Camp Grounds'
          image='https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        />
        <Categorie
          name='Hiking'
          image='https://images.unsplash.com/photo-1645403817357-400c622f06ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
        />
      </div>
      <div className='grid gap-2 md:grid-cols-2'>
        <Categorie
          name='Fishing'
          image='https://images.unsplash.com/photo-1609859682240-6860cf3d99d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80'
        />
        <Categorie
          name='Pubs and Grub'
          image='https://images.unsplash.com/photo-1574521091464-a55e7763c1e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=721&q=80'
        />
      </div>
    </section>
  );
};

export default Categories;
