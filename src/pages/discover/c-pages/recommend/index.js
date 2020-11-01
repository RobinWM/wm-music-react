import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getTopBannerAction } from "./store/actionCreators";

function WMRecommend() {
  // 组件和redux关联
  const { topBanners } = useSelector(
    (state) => ({
      topBanners: state.recommend.topBanners,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // 发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  return (
    <div>
      <h2>WMRecommend:{topBanners.length}</h2>
    </div>
  );
}

export default memo(WMRecommend);
