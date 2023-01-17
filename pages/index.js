import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import {useEffect} from 'react';
import React, { useState } from 'react';
const inter = Inter({ subsets: ['latin'] })

// global.window?.$gtm = "https://gdemo.gtmdev.xyz/";

export default function Home() {

  let valueSet = false;
  const [count, setCount] = useState(0);

  useEffect(() => {
    window.$gtm = {
      endpoint : "https://gdemo.gtmdev.xyz"
    };
    valueSet = true;
    setCount(1);
    
  }, []);

  if(count) {
    return (
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <script async src = "/analytics.js?t=122222asddxxa"></script>
  
        </Head>
        <main className={styles.main}>
          <div className={styles.description}>
            <p>
              Get started by editing&nbsp;
              <code className={styles.code}>pages/index.js</code>
            </p>
            <div>
              <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                By{' '}
                <h1>Vineet</h1>
              </a>
            </div>
          </div>
  
          <div className={styles.center}>
            <Image
              className={styles.logo}
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
            <div className={styles.thirteen}>
              <Image
                src="/thirteen.svg"
                alt="13"
                width={40}
                height={31}
                priority
              />
            </div>
          </div>
  
          <div className = {styles.longText}>
                        Cake chocolate bar donut bear claw muffin tootsie roll apple pie lollipop marshmallow. Jelly cupcake marzipan sweet candy pastry candy canes. Halvah croissant candy canes halvah sweet roll. Bear claw lemon drops pudding fruitcake fruitcake croissant marshmallow. Fruitcake lemon drops marshmallow lemon drops liquorice jelly-o. Wafer lemon drops cheesecake lollipop cotton candy sweet roll jelly-o. Biscuit chocolate cake gummies chocolate bar soufflé cake soufflé. Toffee sesame snaps bear claw marzipan halvah gummi bears cotton candy dessert brownie. Cupcake cupcake tootsie roll halvah chupa chups candy jelly beans tiramisu. Jelly beans ice cream icing toffee lemon drops pastry soufflé danish fruitcake. Brownie jelly sweet gummies cake danish marshmallow. Tart bear claw cupcake icing pie fruitcake bear claw. Wafer lollipop chocolate dessert cotton candy jujubes macaroon marshmallow. Chupa chups bonbon bonbon sugar plum jelly beans cookie sweet.
                Chocolate cake pie croissant tootsie roll jelly beans jujubes cheesecake tootsie roll ice cream. Sweet cake fruitcake toffee pie sweet liquorice. Fruitcake sweet roll jelly halvah soufflé tiramisu. Ice cream dessert dragée muffin liquorice. Liquorice donut sweet roll candy canes gingerbread. Cake candy brownie candy canes danish bonbon. Tart chocolate icing candy canes bonbon tiramisu oat cake gummi bears cheesecake. Cake bear claw sweet halvah jujubes. Tart cupcake liquorice bonbon macaroon sesame snaps. Bear claw soufflé sweet roll croissant soufflé jujubes liquorice. Marshmallow oat cake wafer jelly beans cake. Lollipop cupcake chupa chups chocolate cake topping fruitcake powder. Soufflé sweet powder caramels donut.
                Carrot cake donut lollipop ice cream tart pie caramels sugar plum marshmallow. Cake halvah shortbread cake muffin dessert macaroon tiramisu sugar plum. Lemon drops marshmallow sweet roll chocolate brownie gingerbread. Sesame snaps pastry marshmallow cheesecake marshmallow soufflé fruitcake dessert. Bonbon oat cake lollipop sugar plum apple pie oat cake. Jelly-o donut jujubes dessert oat cake cookie. Pastry marzipan topping fruitcake jelly beans oat cake cake jelly. Gummies liquorice marzipan jelly jelly biscuit bonbon lollipop bonbon. Toffee jelly-o tiramisu lemon drops ice cream gummi bears. Tart macaroon cake gummies chocolate bar chocolate bar sweet. Fruitcake cheesecake croissant tootsie roll bonbon cupcake. Danish marshmallow jelly beans shortbread marshmallow candy candy canes icing chocolate bar. Icing toffee sesame snaps jelly sweet roll sugar plum bear claw danish donut.
                Marzipan pie bonbon gingerbread liquorice halvah jelly-o. Macaroon jelly powder gingerbread jelly beans marzipan toffee tootsie roll gummi bears. Jelly carrot cake shortbread dragée cake. Muffin dragée tootsie roll sweet roll gingerbread shortbread wafer ice cream gummi bears. Chocolate cake gingerbread brownie sweet chocolate. Jujubes topping brownie jelly beans cake gingerbread pastry. Pastry apple pie caramels fruitcake soufflé liquorice halvah. Sugar plum muffin muffin brownie macaroon marzipan tart pudding. Sesame snaps candy canes tiramisu cookie toffee carrot cake. Candy canes jelly-o carrot cake chocolate cake sugar plum ice cream marshmallow. Muffin sugar plum cake oat cake marzipan candy jelly carrot cake jelly. Cupcake fruitcake lollipop brownie croissant gummies jelly-o. Macaroon ice cream tart ice cream icing bear claw sesame snaps.
                Powder tiramisu topping candy canes pastry. Toffee gingerbread danish cookie cookie oat cake. Lollipop bonbon jelly-o marzipan caramels. Dessert liquorice liquorice chocolate bar lemon drops. Marshmallow shortbread jujubes gummies apple pie shortbread ice cream macaroon. Cheesecake wafer cotton candy pudding cotton candy. Muffin pastry cotton candy ice cream dessert soufflé marshmallow sweet roll. Croissant jujubes chupa chups candy canes dessert. Gingerbread jelly-o powder jelly beans jujubes topping. Cake donut muffin lollipop tart sugar plum bear claw. Chocolate bar apple pie pie sweet roll cotton candy. Fruitcake powder topping marzipan sesame snaps lollipop candy. Cake cake gummies sesame snaps wafer marzipan. Jelly beans pastry marzipan cupcake muffin.
  
          </div>
  
          <div className = {styles.longText}>
                        Cake chocolate bar donut bear claw muffin tootsie roll apple pie lollipop marshmallow. Jelly cupcake marzipan sweet candy pastry candy canes. Halvah croissant candy canes halvah sweet roll. Bear claw lemon drops pudding fruitcake fruitcake croissant marshmallow. Fruitcake lemon drops marshmallow lemon drops liquorice jelly-o. Wafer lemon drops cheesecake lollipop cotton candy sweet roll jelly-o. Biscuit chocolate cake gummies chocolate bar soufflé cake soufflé. Toffee sesame snaps bear claw marzipan halvah gummi bears cotton candy dessert brownie. Cupcake cupcake tootsie roll halvah chupa chups candy jelly beans tiramisu. Jelly beans ice cream icing toffee lemon drops pastry soufflé danish fruitcake. Brownie jelly sweet gummies cake danish marshmallow. Tart bear claw cupcake icing pie fruitcake bear claw. Wafer lollipop chocolate dessert cotton candy jujubes macaroon marshmallow. Chupa chups bonbon bonbon sugar plum jelly beans cookie sweet.
                Chocolate cake pie croissant tootsie roll jelly beans jujubes cheesecake tootsie roll ice cream. Sweet cake fruitcake toffee pie sweet liquorice. Fruitcake sweet roll jelly halvah soufflé tiramisu. Ice cream dessert dragée muffin liquorice. Liquorice donut sweet roll candy canes gingerbread. Cake candy brownie candy canes danish bonbon. Tart chocolate icing candy canes bonbon tiramisu oat cake gummi bears cheesecake. Cake bear claw sweet halvah jujubes. Tart cupcake liquorice bonbon macaroon sesame snaps. Bear claw soufflé sweet roll croissant soufflé jujubes liquorice. Marshmallow oat cake wafer jelly beans cake. Lollipop cupcake chupa chups chocolate cake topping fruitcake powder. Soufflé sweet powder caramels donut.
                Carrot cake donut lollipop ice cream tart pie caramels sugar plum marshmallow. Cake halvah shortbread cake muffin dessert macaroon tiramisu sugar plum. Lemon drops marshmallow sweet roll chocolate brownie gingerbread. Sesame snaps pastry marshmallow cheesecake marshmallow soufflé fruitcake dessert. Bonbon oat cake lollipop sugar plum apple pie oat cake. Jelly-o donut jujubes dessert oat cake cookie. Pastry marzipan topping fruitcake jelly beans oat cake cake jelly. Gummies liquorice marzipan jelly jelly biscuit bonbon lollipop bonbon. Toffee jelly-o tiramisu lemon drops ice cream gummi bears. Tart macaroon cake gummies chocolate bar chocolate bar sweet. Fruitcake cheesecake croissant tootsie roll bonbon cupcake. Danish marshmallow jelly beans shortbread marshmallow candy candy canes icing chocolate bar. Icing toffee sesame snaps jelly sweet roll sugar plum bear claw danish donut.
                Marzipan pie bonbon gingerbread liquorice halvah jelly-o. Macaroon jelly powder gingerbread jelly beans marzipan toffee tootsie roll gummi bears. Jelly carrot cake shortbread dragée cake. Muffin dragée tootsie roll sweet roll gingerbread shortbread wafer ice cream gummi bears. Chocolate cake gingerbread brownie sweet chocolate. Jujubes topping brownie jelly beans cake gingerbread pastry. Pastry apple pie caramels fruitcake soufflé liquorice halvah. Sugar plum muffin muffin brownie macaroon marzipan tart pudding. Sesame snaps candy canes tiramisu cookie toffee carrot cake. Candy canes jelly-o carrot cake chocolate cake sugar plum ice cream marshmallow. Muffin sugar plum cake oat cake marzipan candy jelly carrot cake jelly. Cupcake fruitcake lollipop brownie croissant gummies jelly-o. Macaroon ice cream tart ice cream icing bear claw sesame snaps.
                Powder tiramisu topping candy canes pastry. Toffee gingerbread danish cookie cookie oat cake. Lollipop bonbon jelly-o marzipan caramels. Dessert liquorice liquorice chocolate bar lemon drops. Marshmallow shortbread jujubes gummies apple pie shortbread ice cream macaroon. Cheesecake wafer cotton candy pudding cotton candy. Muffin pastry cotton candy ice cream dessert soufflé marshmallow sweet roll. Croissant jujubes chupa chups candy canes dessert. Gingerbread jelly-o powder jelly beans jujubes topping. Cake donut muffin lollipop tart sugar plum bear claw. Chocolate bar apple pie pie sweet roll cotton candy. Fruitcake powder topping marzipan sesame snaps lollipop candy. Cake cake gummies sesame snaps wafer marzipan. Jelly beans pastry marzipan cupcake muffin.
  
          </div>
  
          <div className = {styles.longText}>
                        Cake chocolate bar donut bear claw muffin tootsie roll apple pie lollipop marshmallow. Jelly cupcake marzipan sweet candy pastry candy canes. Halvah croissant candy canes halvah sweet roll. Bear claw lemon drops pudding fruitcake fruitcake croissant marshmallow. Fruitcake lemon drops marshmallow lemon drops liquorice jelly-o. Wafer lemon drops cheesecake lollipop cotton candy sweet roll jelly-o. Biscuit chocolate cake gummies chocolate bar soufflé cake soufflé. Toffee sesame snaps bear claw marzipan halvah gummi bears cotton candy dessert brownie. Cupcake cupcake tootsie roll halvah chupa chups candy jelly beans tiramisu. Jelly beans ice cream icing toffee lemon drops pastry soufflé danish fruitcake. Brownie jelly sweet gummies cake danish marshmallow. Tart bear claw cupcake icing pie fruitcake bear claw. Wafer lollipop chocolate dessert cotton candy jujubes macaroon marshmallow. Chupa chups bonbon bonbon sugar plum jelly beans cookie sweet.
                Chocolate cake pie croissant tootsie roll jelly beans jujubes cheesecake tootsie roll ice cream. Sweet cake fruitcake toffee pie sweet liquorice. Fruitcake sweet roll jelly halvah soufflé tiramisu. Ice cream dessert dragée muffin liquorice. Liquorice donut sweet roll candy canes gingerbread. Cake candy brownie candy canes danish bonbon. Tart chocolate icing candy canes bonbon tiramisu oat cake gummi bears cheesecake. Cake bear claw sweet halvah jujubes. Tart cupcake liquorice bonbon macaroon sesame snaps. Bear claw soufflé sweet roll croissant soufflé jujubes liquorice. Marshmallow oat cake wafer jelly beans cake. Lollipop cupcake chupa chups chocolate cake topping fruitcake powder. Soufflé sweet powder caramels donut.
                Carrot cake donut lollipop ice cream tart pie caramels sugar plum marshmallow. Cake halvah shortbread cake muffin dessert macaroon tiramisu sugar plum. Lemon drops marshmallow sweet roll chocolate brownie gingerbread. Sesame snaps pastry marshmallow cheesecake marshmallow soufflé fruitcake dessert. Bonbon oat cake lollipop sugar plum apple pie oat cake. Jelly-o donut jujubes dessert oat cake cookie. Pastry marzipan topping fruitcake jelly beans oat cake cake jelly. Gummies liquorice marzipan jelly jelly biscuit bonbon lollipop bonbon. Toffee jelly-o tiramisu lemon drops ice cream gummi bears. Tart macaroon cake gummies chocolate bar chocolate bar sweet. Fruitcake cheesecake croissant tootsie roll bonbon cupcake. Danish marshmallow jelly beans shortbread marshmallow candy candy canes icing chocolate bar. Icing toffee sesame snaps jelly sweet roll sugar plum bear claw danish donut.
                Marzipan pie bonbon gingerbread liquorice halvah jelly-o. Macaroon jelly powder gingerbread jelly beans marzipan toffee tootsie roll gummi bears. Jelly carrot cake shortbread dragée cake. Muffin dragée tootsie roll sweet roll gingerbread shortbread wafer ice cream gummi bears. Chocolate cake gingerbread brownie sweet chocolate. Jujubes topping brownie jelly beans cake gingerbread pastry. Pastry apple pie caramels fruitcake soufflé liquorice halvah. Sugar plum muffin muffin brownie macaroon marzipan tart pudding. Sesame snaps candy canes tiramisu cookie toffee carrot cake. Candy canes jelly-o carrot cake chocolate cake sugar plum ice cream marshmallow. Muffin sugar plum cake oat cake marzipan candy jelly carrot cake jelly. Cupcake fruitcake lollipop brownie croissant gummies jelly-o. Macaroon ice cream tart ice cream icing bear claw sesame snaps.
                Powder tiramisu topping candy canes pastry. Toffee gingerbread danish cookie cookie oat cake. Lollipop bonbon jelly-o marzipan caramels. Dessert liquorice liquorice chocolate bar lemon drops. Marshmallow shortbread jujubes gummies apple pie shortbread ice cream macaroon. Cheesecake wafer cotton candy pudding cotton candy. Muffin pastry cotton candy ice cream dessert soufflé marshmallow sweet roll. Croissant jujubes chupa chups candy canes dessert. Gingerbread jelly-o powder jelly beans jujubes topping. Cake donut muffin lollipop tart sugar plum bear claw. Chocolate bar apple pie pie sweet roll cotton candy. Fruitcake powder topping marzipan sesame snaps lollipop candy. Cake cake gummies sesame snaps wafer marzipan. Jelly beans pastry marzipan cupcake muffin.
  
          </div>
        </main>
      </>
    )
  }
  
}
