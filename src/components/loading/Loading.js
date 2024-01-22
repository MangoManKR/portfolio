import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import GreetingSplash from './GreetingSplash';

function Loading({ onFinishLoading }) {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // Show Spinner for 3 seconds
    const loadingTimeout = setTimeout(() => {
      setShowLoading(false);
    }, 3000);

    // Call onFinishLoading after 5 seconds
    const finishLoadingTimeout = setTimeout(() => {
      onFinishLoading();
    }, 5000);

    // Clear timeouts to avoid memory leaks
    return () => {
      clearTimeout(loadingTimeout);
      clearTimeout(finishLoadingTimeout);
    };
  }, [onFinishLoading]);

  return (
    <div>
      {showLoading && <Spinner />}
      {<GreetingSplash />}
    </div>
  );
}

export default Loading;