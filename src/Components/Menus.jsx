import React from 'react'
import "../App.css";

export default function Menus() {
  return (
    <section id='Menus'>
      <div className='w-screen h-screen flex flex-col justify-center'>
        <div className='border-2 border-myyellow h-[700px] m-auto w-3/4 md:w-[600px] top-5'>
          <div className='flex flex-col text-center justify-center items-center p-2'>
            <h3 className='text-myyellow text-xl justify-center'>Menus "Le chalet"</h3>
              <p className='text-mywhite m-3 text-sm justify-center italic'>1 entrée - 1 plat - 1 dessert 
              <br/>
              Menu non modifiable</p>
              <p className='text-mywhite text-sm'>
                Salade savoyarde<br/>
                <span className='text-myyellow'>Ou </span>Salade de chèvre chaud<br/>
                <span className='text-myyellow'>Ou </span>Jambon cru de Savoie<br/>
                <span className='text-myyellow'>Ou </span>Croûte savoyarde<br/><br/>
                Pavé de coeur de rumsteck, sauce reblochon<br/>
                <span className='text-myyellow'>Ou </span>Escalope savoyarde / Fondue savoyarde<br/>
                <span className='text-myyellow'>Ou </span>Tartiflette nature / lardon<br/><br/>
                Dessert au choix<br/><br/>
                <span className='text-myyellow text-xl'>38 Euros</span>
              </p><br/>
              <h3 className='text-myyellow text-xl justify-center'>Menus "Le p'tit savoyard"</h3>
                <p className='text-mywhite m-3 text-sm justify-center italic'>Moins de 10 ans 
                <br/>
                Tout compris</p>
                <p className='text-mywhite text-sm'>
                  Salade verte<br/>
                  <span className='text-myyellow'>Ou </span>Mini croûte savoyarde<br/>
                  <span className='text-myyellow'>Ou </span>Assiete de charcuterie<br/><br/>
                  Mini tartiflette nature / lardons<br/>
                  <span className='text-myyellow'>Ou </span>Jambon frites<br/>
                  <span className='text-myyellow'>Ou </span>Steack haché frites<br/><br/>
                  Glace 2 boules - cocktail de fruits<br/><br/>
                  <span className='text-myyellow text-xl'>13 Euros</span>
                </p>
          </div>
        </div>
        <button className='border-2 border-myyellow text-myyellow hover:bg-myyellow hover:text-mywhite h-[50px] m-auto xs:w-[300px] bottom-0 flex text-center justify-center items-center'>
          <h3 className='text-xl'>Acces carte complete</h3>
        </button>
      </div>
    </section>
  )
}
