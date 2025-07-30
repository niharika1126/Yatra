import React from 'react';
import KashiHero from '../pageComponents/KashiActivity/KashiHero'; 
import KashiC from '../pageComponents/KashiActivity/KashiC';
import KashiI from '../pageComponents/KashiActivity/KashiI';
import KashiO from '../pageComponents/KashiActivity/KashiO';
import KashiT from '../pageComponents/KashiActivity/KashiT';
const KashiActivity = () => {
  return (
    <div>
      <KashiHero />
      <KashiC />
      <KashiT />
      <KashiI />
      <KashiO />
    </div>
  );
};

export default KashiActivity;
