import Button from '../components/Button';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

function ButtonPage() {
  return (
    <div>
      <div>
        <Button className='mb-2' onClick={() => {}} rounded primary>
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger>
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button outline warning>
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary>Hide Ads!</Button>
      </div>
      <div>
        <Button success>Something!</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
