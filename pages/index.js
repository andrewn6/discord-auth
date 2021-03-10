import Head from 'next/head'
import Particles from 'react-particles-js'
import { Button } from 'antd';
import { SiDiscord } from 'react-icons/si';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Discord auth</title>
        <meta name="og:title" content="Discord auth"/>
        <meta name="theme-color" content="#39e66a" />
      </Head>
      <main className={styles.main}>
      <Particles
                    params={{
                        'backgroundMode': {
                            'enable': true,
                        },
                        'particles': {
                            'color': {
                                'value': '#ffffff',
                            },
                            'links': {
                                'color': {
                                    'value': '#ffffff',
                                },
                                'distance': 150,
                                'enable': true,
                                'opacity': 0.4,
                            },
                            'move': {
                                'attract': {
                                    'rotate': {
                                        'x': 600,
                                        'y': 1200,
                                    },
                                },
                                'enable': true,
                            },
                            'number': {
                                'density': {
                                    'enable': true,
                                },
                                'value': 60,
                            },
                            'opacity': {
                                'value': 0.5,
                                'animation': {
                                    'minimumValue': 0.1,
                                    'speed': 1,
                                },
                            },
                            'shadow': {
                                'blur': 5,
                                'enable': true,
                                'offset': {
                                    'x': 3,
                                    'y': 3,
                                },
                            },
                            'size': {
                                'value': 3,
                                'animation': {
                                    'minimumValue': 0.1,
                                    'speed': 40,
                                },
                            },
                            'stroke': {
                                'color': {
                                    'value': '#000000',
                                    'animation': {
                                        'enable': false,
                                        'speed': 1,
                                        'sync': true,
                                    },
                                },
                            },
                        },
              }} />
              <h2>Discord auth</h2>
              <h3>Lol my discord auth thing idk</h3>
              <div style={{ marginTop: '8px'}}>
              <Button
                href={`https://localhost:3001/auth/discord/login`}
                icon={<SiDiscord style={{ marginRight: '8px'}} />}
                type="primary"
                block
                size="large"
                style={{
                  marginTop: '10px',
                  marginTop: '-35px',
                  backgroundColor: '#7289DA',
                  border: 'none',
                }}
              >

                Login with Discord 
              </Button>
          </main>
      </div>
  );
}
