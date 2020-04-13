import React from 'react';

import styled from '@emotion/native';

import languages from '../../locales/languages';

import { ExposureCalendarView } from './ExposureCalendarView';
import { SingleExposureDetail } from './SingleExposureDetail';
import { Typography } from '../../components/Typography';

/**
 * Detailed info when there is some exposure found
 *
 * @param {{history: !import('../constants/history').History}} param0
 */
export const DetailedHistory = ({ history }) => {
  const exposedDays = history.filter(day => day.exposureTime > 0);
  return (
    <>
      <ExposureCalendarView weeks={3} history={history} />

      <Divider />

      {exposedDays.map(({ exposureTime, daysAgo }) => (
        <SingleExposureDetail
          key={daysAgo}
          daysAgo={daysAgo}
          exposureTime={exposureTime}
        />
      ))}

      <Typography use="headline2">
        {languages.t('history.what_does_this_mean')}
      </Typography>
      <Typography>{languages.t('history.what_does_this_mean_para')}</Typography>

      <Typography use="headline2">
        {languages.t('history.what_if_no_symptoms')}
      </Typography>
      <Typography>{languages.t('history.what_if_no_symptoms_para')}</Typography>
    </>
  );
};

const Divider = styled.View`
  height: 20px;
  width: 100%;
`;