import React from 'react';
import styled from '@emotion/styled';

// Local modules
import { IconButton } from '../UI';

// Assets Imports
import { ReactComponent as FacebookIcon } from '../../media/icons/fb.svg';
import { ReactComponent as TwitterIcon } from '../../media/icons/twitter.svg';
import { ReactComponent as PinterestIcon } from '../../media/icons/pinterest.svg';
import { ReactComponent as LinkedinIcon } from '../../media/icons/linkedin.svg';
import { ReactComponent as GoogleIcon } from '../../media/icons/google.svg';

// Styled Components
const SocialListWrapper = styled.div`
  display:flex;
  gap: 6px;
`;

// Constants
const ICONS = {
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  pinterest: PinterestIcon,
  linkedin: LinkedinIcon,
  google: GoogleIcon
};

// Exports
export const SocialList = ({ socialLinks }) => (
  <SocialListWrapper>
    {
      Object.keys(socialLinks).map((key, index) => {
        let link = socialLinks[key];

        return (
          <a href={ link } target="_blank" rel="noreferrer" key={ index }>
            <IconButton Icon={ ICONS[key] } size={ 'medium' }/>
          </a>
        );
      })
    }
  </SocialListWrapper>
);

