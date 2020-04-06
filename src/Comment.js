import React, { Component } from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import "./style.css";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class Diskusi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      modalDiskusiIsOpen: false,
    }
  }

  toggleModalDiskusi = () => {
    this.setState({
      modalDiskusiIsOpen: !this.state.modalDiskusiIsOpen
    });
  }
  render() {

    return (
      <div>
        <Comment.Group
          style={{
            marginLeft: '20px',
            marginRight: '20px',
            marginTop: '10px',
            marginBottom: '20px',
          }}
        >
          <Header as='h3' >
            Diskusi
      </Header>

          <Comment className='headerCom'>
            <Comment.Avatar src='data:image/jpeg;base64,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' />
            <Comment.Content className='headerComment'>
              <Comment.Author as='a'>Matt</Comment.Author>
              <Comment.Metadata>
                <div>Today at 5:42PM</div>
              </Comment.Metadata>
              <Comment.Text>How artistic!</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>

          <Comment>
            <Comment.Avatar src='data:image/jpeg;base64,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' />
            <Comment.Content className='headerComment'>
              <Comment.Author as='a'>Elliot Fu</Comment.Author>
              <Comment.Metadata>
                <div>Yesterday at 12:30AM</div>
              </Comment.Metadata>
              <Comment.Text>
                <p>This has been very useful for my research. Thanks as well!</p>
              </Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
            <Comment.Group>
              <Comment>
                <Comment.Avatar src='data:image/jpeg;base64,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' />
                <Comment.Content className='headerComment'>
                  <Comment.Author as='a'>Jenny Hess</Comment.Author>
                  <Comment.Metadata>
                    <div>Just now</div>
                  </Comment.Metadata>
                  <Comment.Text>Elliot you are always so right :)</Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>
            </Comment.Group>
          </Comment>

          <Comment>
            <Comment.Avatar src='data:image/png;base64,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' />
            <Comment.Content className='headerComment'>
              <Comment.Author as='a'>Joe Henderson</Comment.Author>
              <Comment.Metadata>
                <div>5 days ago</div>
              </Comment.Metadata>
              <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>

          <Form reply>
            {/* <Form.TextArea /> */}
            <br></br>
            <Button color='green' content='Add Reply' labelPosition='left' icon='edit' onClick={this.toggleModalDiskusi.bind(this)} />
          </Form>
        </Comment.Group>

        <Modal isOpen={this.state.modalDiskusiIsOpen} style={{ marginTop: '100px' }} >
          <ModalHeader toggle={this.toggleModalDiskusi.bind(this)}>Diskusi Barang</ModalHeader>
          <ModalBody>
            <Form>
              <Form.TextArea placeholder='Ketik yang anda ingin diskusikan...' />
              <Button
                color="primary"
                type='submit'
                onClick={this.toggleModalDiskusi.bind(this)}                
                floated='right'
              >
                Kirim
              </Button>{' '}
              <Button
                color="secondary"
                onClick={this.toggleModalDiskusi.bind(this)}
                floated='right'
              >
                Batal
              </Button>
            </Form>
          </ModalBody>
          {/* <ModalFooter>
            <Button color="primary" onClick={this.toggleModalDiskusi.bind(this)}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggleModalDiskusi.bind(this)}>Cancel</Button>
          </ModalFooter> */}
        </Modal>
      </div>
    );
  }
}
export default Diskusi;