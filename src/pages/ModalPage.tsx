import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <Button onClick={handleClose} primary>
      I Accept
    </Button>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement to accept</p>
    </Modal>
  );

  return (
    <div className='relative'>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        dui enim, vestibulum sed varius nec, convallis at sapien. Aliquam
        condimentum dolor et sollicitudin hendrerit. Maecenas iaculis neque quis
        sagittis semper. Sed id dictum eros. Fusce vitae justo a magna viverra
        commodo eu sed nibh. Integer placerat leo eu venenatis condimentum. Nunc
        sagittis justo non metus pretium semper. Fusce varius, nulla vel
        accumsan auctor, urna quam lobortis mauris, vitae luctus mi sapien at
        ipsum. Sed tempor aliquet ipsum, at ullamcorper nulla gravida id. Duis
        condimentum nunc ullamcorper, luctus ligula id, ultricies ante. Sed
        lacus massa, posuere ac sollicitudin sit amet, scelerisque at ex. Sed
        eget libero leo. Ut vulputate lorem at massa vehicula, sed dignissim dui
        pharetra.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        dui enim, vestibulum sed varius nec, convallis at sapien. Aliquam
        condimentum dolor et sollicitudin hendrerit. Maecenas iaculis neque quis
        sagittis semper. Sed id dictum eros. Fusce vitae justo a magna viverra
        commodo eu sed nibh. Integer placerat leo eu venenatis condimentum. Nunc
        sagittis justo non metus pretium semper. Fusce varius, nulla vel
        accumsan auctor, urna quam lobortis mauris, vitae luctus mi sapien at
        ipsum. Sed tempor aliquet ipsum, at ullamcorper nulla gravida id. Duis
        condimentum nunc ullamcorper, luctus ligula id, ultricies ante. Sed
        lacus massa, posuere ac sollicitudin sit amet, scelerisque at ex. Sed
        eget libero leo. Ut vulputate lorem at massa vehicula, sed dignissim dui
        pharetra.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        dui enim, vestibulum sed varius nec, convallis at sapien. Aliquam
        condimentum dolor et sollicitudin hendrerit. Maecenas iaculis neque quis
        sagittis semper. Sed id dictum eros. Fusce vitae justo a magna viverra
        commodo eu sed nibh. Integer placerat leo eu venenatis condimentum. Nunc
        sagittis justo non metus pretium semper. Fusce varius, nulla vel
        accumsan auctor, urna quam lobortis mauris, vitae luctus mi sapien at
        ipsum. Sed tempor aliquet ipsum, at ullamcorper nulla gravida id. Duis
        condimentum nunc ullamcorper, luctus ligula id, ultricies ante. Sed
        lacus massa, posuere ac sollicitudin sit amet, scelerisque at ex. Sed
        eget libero leo. Ut vulputate lorem at massa vehicula, sed dignissim dui
        pharetra.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        dui enim, vestibulum sed varius nec, convallis at sapien. Aliquam
        condimentum dolor et sollicitudin hendrerit. Maecenas iaculis neque quis
        sagittis semper. Sed id dictum eros. Fusce vitae justo a magna viverra
        commodo eu sed nibh. Integer placerat leo eu venenatis condimentum. Nunc
        sagittis justo non metus pretium semper. Fusce varius, nulla vel
        accumsan auctor, urna quam lobortis mauris, vitae luctus mi sapien at
        ipsum. Sed tempor aliquet ipsum, at ullamcorper nulla gravida id. Duis
        condimentum nunc ullamcorper, luctus ligula id, ultricies ante. Sed
        lacus massa, posuere ac sollicitudin sit amet, scelerisque at ex. Sed
        eget libero leo. Ut vulputate lorem at massa vehicula, sed dignissim dui
        pharetra.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        dui enim, vestibulum sed varius nec, convallis at sapien. Aliquam
        condimentum dolor et sollicitudin hendrerit. Maecenas iaculis neque quis
        sagittis semper. Sed id dictum eros. Fusce vitae justo a magna viverra
        commodo eu sed nibh. Integer placerat leo eu venenatis condimentum. Nunc
        sagittis justo non metus pretium semper. Fusce varius, nulla vel
        accumsan auctor, urna quam lobortis mauris, vitae luctus mi sapien at
        ipsum. Sed tempor aliquet ipsum, at ullamcorper nulla gravida id. Duis
        condimentum nunc ullamcorper, luctus ligula id, ultricies ante. Sed
        lacus massa, posuere ac sollicitudin sit amet, scelerisque at ex. Sed
        eget libero leo. Ut vulputate lorem at massa vehicula, sed dignissim dui
        pharetra.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        dui enim, vestibulum sed varius nec, convallis at sapien. Aliquam
        condimentum dolor et sollicitudin hendrerit. Maecenas iaculis neque quis
        sagittis semper. Sed id dictum eros. Fusce vitae justo a magna viverra
        commodo eu sed nibh. Integer placerat leo eu venenatis condimentum. Nunc
        sagittis justo non metus pretium semper. Fusce varius, nulla vel
        accumsan auctor, urna quam lobortis mauris, vitae luctus mi sapien at
        ipsum. Sed tempor aliquet ipsum, at ullamcorper nulla gravida id. Duis
        condimentum nunc ullamcorper, luctus ligula id, ultricies ante. Sed
        lacus massa, posuere ac sollicitudin sit amet, scelerisque at ex. Sed
        eget libero leo. Ut vulputate lorem at massa vehicula, sed dignissim dui
        pharetra.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        dui enim, vestibulum sed varius nec, convallis at sapien. Aliquam
        condimentum dolor et sollicitudin hendrerit. Maecenas iaculis neque quis
        sagittis semper. Sed id dictum eros. Fusce vitae justo a magna viverra
        commodo eu sed nibh. Integer placerat leo eu venenatis condimentum. Nunc
        sagittis justo non metus pretium semper. Fusce varius, nulla vel
        accumsan auctor, urna quam lobortis mauris, vitae luctus mi sapien at
        ipsum. Sed tempor aliquet ipsum, at ullamcorper nulla gravida id. Duis
        condimentum nunc ullamcorper, luctus ligula id, ultricies ante. Sed
        lacus massa, posuere ac sollicitudin sit amet, scelerisque at ex. Sed
        eget libero leo. Ut vulputate lorem at massa vehicula, sed dignissim dui
        pharetra.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        dui enim, vestibulum sed varius nec, convallis at sapien. Aliquam
        condimentum dolor et sollicitudin hendrerit. Maecenas iaculis neque quis
        sagittis semper. Sed id dictum eros. Fusce vitae justo a magna viverra
        commodo eu sed nibh. Integer placerat leo eu venenatis condimentum. Nunc
        sagittis justo non metus pretium semper. Fusce varius, nulla vel
        accumsan auctor, urna quam lobortis mauris, vitae luctus mi sapien at
        ipsum. Sed tempor aliquet ipsum, at ullamcorper nulla gravida id. Duis
        condimentum nunc ullamcorper, luctus ligula id, ultricies ante. Sed
        lacus massa, posuere ac sollicitudin sit amet, scelerisque at ex. Sed
        eget libero leo. Ut vulputate lorem at massa vehicula, sed dignissim dui
        pharetra.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        dui enim, vestibulum sed varius nec, convallis at sapien. Aliquam
        condimentum dolor et sollicitudin hendrerit. Maecenas iaculis neque quis
        sagittis semper. Sed id dictum eros. Fusce vitae justo a magna viverra
        commodo eu sed nibh. Integer placerat leo eu venenatis condimentum. Nunc
        sagittis justo non metus pretium semper. Fusce varius, nulla vel
        accumsan auctor, urna quam lobortis mauris, vitae luctus mi sapien at
        ipsum. Sed tempor aliquet ipsum, at ullamcorper nulla gravida id. Duis
        condimentum nunc ullamcorper, luctus ligula id, ultricies ante. Sed
        lacus massa, posuere ac sollicitudin sit amet, scelerisque at ex. Sed
        eget libero leo. Ut vulputate lorem at massa vehicula, sed dignissim dui
        pharetra.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        dui enim, vestibulum sed varius nec, convallis at sapien. Aliquam
        condimentum dolor et sollicitudin hendrerit. Maecenas iaculis neque quis
        sagittis semper. Sed id dictum eros. Fusce vitae justo a magna viverra
        commodo eu sed nibh. Integer placerat leo eu venenatis condimentum. Nunc
        sagittis justo non metus pretium semper. Fusce varius, nulla vel
        accumsan auctor, urna quam lobortis mauris, vitae luctus mi sapien at
        ipsum. Sed tempor aliquet ipsum, at ullamcorper nulla gravida id. Duis
        condimentum nunc ullamcorper, luctus ligula id, ultricies ante. Sed
        lacus massa, posuere ac sollicitudin sit amet, scelerisque at ex. Sed
        eget libero leo. Ut vulputate lorem at massa vehicula, sed dignissim dui
        pharetra.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        dui enim, vestibulum sed varius nec, convallis at sapien. Aliquam
        condimentum dolor et sollicitudin hendrerit. Maecenas iaculis neque quis
        sagittis semper. Sed id dictum eros. Fusce vitae justo a magna viverra
        commodo eu sed nibh. Integer placerat leo eu venenatis condimentum. Nunc
        sagittis justo non metus pretium semper. Fusce varius, nulla vel
        accumsan auctor, urna quam lobortis mauris, vitae luctus mi sapien at
        ipsum. Sed tempor aliquet ipsum, at ullamcorper nulla gravida id. Duis
        condimentum nunc ullamcorper, luctus ligula id, ultricies ante. Sed
        lacus massa, posuere ac sollicitudin sit amet, scelerisque at ex. Sed
        eget libero leo. Ut vulputate lorem at massa vehicula, sed dignissim dui
        pharetra.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        dui enim, vestibulum sed varius nec, convallis at sapien. Aliquam
        condimentum dolor et sollicitudin hendrerit. Maecenas iaculis neque quis
        sagittis semper. Sed id dictum eros. Fusce vitae justo a magna viverra
        commodo eu sed nibh. Integer placerat leo eu venenatis condimentum. Nunc
        sagittis justo non metus pretium semper. Fusce varius, nulla vel
        accumsan auctor, urna quam lobortis mauris, vitae luctus mi sapien at
        ipsum. Sed tempor aliquet ipsum, at ullamcorper nulla gravida id. Duis
        condimentum nunc ullamcorper, luctus ligula id, ultricies ante. Sed
        lacus massa, posuere ac sollicitudin sit amet, scelerisque at ex. Sed
        eget libero leo. Ut vulputate lorem at massa vehicula, sed dignissim dui
        pharetra.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        dui enim, vestibulum sed varius nec, convallis at sapien. Aliquam
        condimentum dolor et sollicitudin hendrerit. Maecenas iaculis neque quis
        sagittis semper. Sed id dictum eros. Fusce vitae justo a magna viverra
        commodo eu sed nibh. Integer placerat leo eu venenatis condimentum. Nunc
        sagittis justo non metus pretium semper. Fusce varius, nulla vel
        accumsan auctor, urna quam lobortis mauris, vitae luctus mi sapien at
        ipsum. Sed tempor aliquet ipsum, at ullamcorper nulla gravida id. Duis
        condimentum nunc ullamcorper, luctus ligula id, ultricies ante. Sed
        lacus massa, posuere ac sollicitudin sit amet, scelerisque at ex. Sed
        eget libero leo. Ut vulputate lorem at massa vehicula, sed dignissim dui
        pharetra.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        dui enim, vestibulum sed varius nec, convallis at sapien. Aliquam
        condimentum dolor et sollicitudin hendrerit. Maecenas iaculis neque quis
        sagittis semper. Sed id dictum eros. Fusce vitae justo a magna viverra
        commodo eu sed nibh. Integer placerat leo eu venenatis condimentum. Nunc
        sagittis justo non metus pretium semper. Fusce varius, nulla vel
        accumsan auctor, urna quam lobortis mauris, vitae luctus mi sapien at
        ipsum. Sed tempor aliquet ipsum, at ullamcorper nulla gravida id. Duis
        condimentum nunc ullamcorper, luctus ligula id, ultricies ante. Sed
        lacus massa, posuere ac sollicitudin sit amet, scelerisque at ex. Sed
        eget libero leo. Ut vulputate lorem at massa vehicula, sed dignissim dui
        pharetra.
      </p>
    </div>
  );
}

export default ModalPage;
