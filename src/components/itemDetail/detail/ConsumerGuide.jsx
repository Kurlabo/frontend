import React, { useState } from 'react';
import { useCallback } from 'react';
import OrderCancelGuide from './OrderCancelGuide';
import OrderCancelGuideDetail from './OrderCancelGuideDetail';
import RefundGuide from './RefundGuide';
import RefundGuideDetail from './RefundGuideDetail';

const ConsumerGuide = () => {
  const [hidden, setHidden] = useState({
    orederCancel: true,
    refundGuide: true,
  });

  const onClickOrderCancel = useCallback(() => {
    setHidden(hidden => ({ ...hidden, orederCancel: !hidden.orederCancel }));
  }, []);

  const onClickRefundGuide = useCallback(() => {
    setHidden(hidden => ({
      ...hidden,
      refundGuide: !hidden.refundGuide,
    }));
  }, []);

  return (
    <div>
      <OrderCancelGuide onClick={onClickOrderCancel} isClose={hidden.orederCancel} />
      <OrderCancelGuideDetail className={hidden.orederCancel ? 'hidden' : ''} />
      <RefundGuide onClick={onClickRefundGuide} isClose={hidden.refundGuide} />
      <RefundGuideDetail className={hidden.refundGuide ? 'hidden' : ''} />
    </div>
  );
};

export default ConsumerGuide;
