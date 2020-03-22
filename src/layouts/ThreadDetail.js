import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Feed, Menu, Icon } from 'semantic-ui-react'
import { CarouselThread } from '../components/Carousel'
import { CommentThread } from '../components/Comment'
import styled from 'styled-components'
import budi from '../assets/budi.jpg'

const Styles = styled.div`
    .paragraph {
        font-size: 18px;
        white-space: pre-line;
    }
`;

const image = budi
const date = '3 days ago'
const user = 'Budi Setiawan'
const judul = 'Jutaan orang tidak menyadari..'
const paragraph1 = 'Jutaan orang bahkan tidak menyadari bahwa mereka bisa menghasilkan 1000 USD sehari tanpa meninggalkan rumah, dan anda adalah salah satu dari mereka. Halo nama saya Budi Setiawan, saya seorang trader profesional. Semua yang anda lihat ini bisa saya raih dalam waktu kurang dari 1 tahun.'
const paragraph2 = 'Tetapi hal terpenting yang pernah saya dapatkan adalah pengalaman yang tak ternilai, dan saya akan membagikan pengalaman saya kepada anda. Inilah yang dilakukan banyak trader melakukan transaksi. Mereka menghabiskan banyak waktu dan usaha untuk meraih penghasilannya.' 
const paragraph3 = 'Sejujurnya, itulah yang menghentikan saya. Saya mengerti seberapa jauh ketidaktahuan saya dari dunia keuangan. Saya menonton The Wolf of Wall Street dan saya berpikir, Wow, orang-orang ini menghasilkan uang dari ketiadaan. Tetapi saya juga tahu bahwa saya tidak tahu apa-apa tentang bursa, atau saham, atau apapun itu.' 
const paragraph4 = 'Namun setahun yang lalu saya menemukan Binomo, ini adalah platform. Bagi para pemula pun dapat melakukan transaksi perdagangan. Dan yang seperti saya katakan, saya sekarang bisa menghasilkan lebih dari 1000 dolar hanya dengan mencurahkan 2-3 jam waktu saya untuk trading. Sekarang teman-teman saya telah menyebut saya sukses, karena saya bisa jalan-jalan kemana saja, ke belahan dunia manapun yang saya inginkan. Dan mereka juga belajar cara mendapatkan penghasilan.' 
const paragraph5 = 'Ingin tahu caranya? Simpel. Lihat. Kita masuk ke Binomo, saya akan membuka perdagangan sekarang dan mendapatkan profit sebesar 88 dolar dalam 1 menit. Waktu perdagangan 1 menit. Besar transaksi 100 dolar, saya memprediksi grafik akan naik atau turun. Kemudian saya tunggu sebentar ... lihat, saya mendapat kembali 100 dolar saya dan menghasilkan profit sebesar 88 dolar hanya dalam 1 menit. Bagaimana menurut anda? Anda dapat membuka akun dengan deposit 10 dolar dan menghasilkan uang dengan cara yang sama. Untuk melakukan ini, buka saja situs Binomo, daftar, dan pilih mata uang yang ingin anda perdagangkan dan menarik profit yang anda dapatkan'

export const ThreadDetail = () => (
    <Styles>
        <Row>
            <Col sm={2} />
            <Col sm={8}>
                <br></br><br></br>
                <h1>{judul}</h1>

                <Feed>
                    <Feed.Event>
                        <Feed.Label image={image} />
                        <Feed.Content>
                            <Feed.Summary>
                                <Feed.User>{user}</Feed.User>
                                <Feed.Date>{date}</Feed.Date>
                            </Feed.Summary>
                        </Feed.Content>
                    </Feed.Event>
                </Feed>

                <Menu compact>
                    <Menu.Item as='a'>
                        <Icon name='thumbs up' color='#' /> 420
                    </Menu.Item>
                    <Menu.Item as='a'>
                        <Icon name='thumbs down' /> 69
                    </Menu.Item>
                    <Menu.Item as='a'>
                        <Icon name='comment' /> 1000
                    </Menu.Item>
                </Menu>

                <br></br><br></br>
                <CarouselThread />

                <br></br>
                <p className="paragraph">{paragraph1}</p>
                <p className="paragraph">{paragraph2}</p>
                <p className="paragraph">{paragraph3}</p>
                <p className="paragraph">{paragraph4}</p>
                <p className="paragraph">{paragraph5}</p>

                <br></br>
                <CommentThread></CommentThread>
            </Col>
            <Col sm={2} />
        </Row>
    </Styles>
)