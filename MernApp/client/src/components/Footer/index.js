import React from 'react';

import './footer.sass';

const Footer = () => (
    
        <div className="footer-menu">
            <ul className='nav-footer'>
                <li>Mes Listes</li>  
                <li>Mes Recettes</li>
                <li>Légumes de saison</li>
            </ul>
          </div>
     
)

export default Footer;

/*

 <FixedArea fixed='bottom'>
        <Grid columns={3}>
            <Grid.Row className="footer-grid">
              <Grid.Column >
                <Header className='nav-footer' as='h1'>Mes Listes</Header>  
              </Grid.Column>
              <Grid.Column>
                <Header as='h1' className='nav-footer'>Mes Recettes</Header>
              </Grid.Column>
              <Grid.Column>
                <Header as='h1' className='nav-footer'>Légumes de saison/recettes</Header>
              </Grid.Column>
            </Grid.Row>
        </Grid>
    </FixedArea> 

*/

