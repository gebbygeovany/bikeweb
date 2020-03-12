import React from 'react'
import { Feed, Message } from 'semantic-ui-react'
import styled from 'styled-components'
import profileImage from '../assets/profile.jpg'
import budi from '../assets/budi.jpg'

const Styles = styled.div`
    .message {
        background-color: #f5f0f0;
        font-size: small;
        margin: 10px 0px 0px 0px;
    }
`;

export const FeedChat = () => (
    <Styles>
        <Feed>
            <Feed.Event>
                <Feed.Label image={budi} />
                <Feed.Content>
                    <Feed.Summary>
                        <a>Budi Setiawan</a>
                        <Feed.Date>10:00 PM</Feed.Date>
                    </Feed.Summary>
                    <Feed.Extra text>
                        <Message compact message>
                            Jutaan orang bahkan tidak menyadari bahwa mereka bisa menghasilkan 1000 USD sehari tanpa meninggalkan rumah. Dan Anda adalah salah satu dari mereka.
                        </Message>
                        <Message compact message>
                            Halo, nama saya Budi Setiawan. Saya seorang trader profesional. Semua yang Anda lihat ini bisa saya raih dalam waktu kurang satu tahun. Setahun yang lalu saya menemukan Binomo.
                        </Message>
                        <Message compact message>
                            Ini adalah platform. Bagi para pemula pun dapat melakukan transaksi perdagangan. Dan yang seperti saya katakan, saya sekarang bisa menghasilkan lebih dari 1000 USD hanya dengan mencurahkan dua sampai tiga jam waktu saya untuk trading
                        </Message>
                    </Feed.Extra>
                </Feed.Content>
            </Feed.Event>

            <Feed.Event>
                <Feed.Label image={profileImage} />
                <Feed.Content>
                    <Feed.Summary>
                        <a>Anonymous</a>
                        <Feed.Date>10:00 PM</Feed.Date>
                    </Feed.Summary>
                    <Feed.Extra text>
                        <Message compact message>
                            WOW
                        </Message>
                    </Feed.Extra>
                </Feed.Content>
            </Feed.Event>

            <Feed.Event>
                <Feed.Label image={profileImage} />
                <Feed.Content>
                    <Feed.Summary>
                        <a>User</a>
                        <Feed.Date>10:00 PM</Feed.Date>
                    </Feed.Summary>
                    <Feed.Extra text>
                        <Message compact message color="blue">
                        WOW
                        </Message>
                    </Feed.Extra>
                </Feed.Content>
            </Feed.Event>
            
        </Feed>
    </Styles>
)