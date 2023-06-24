import * as yup from 'yup';
import { isAfter,isEqual } from 'date-fns';

export const SlotSchema = yup.object().shape({
    duration: yup.number().required('required'),
    startTime: yup
    .string()
    .required('Starting time is required')
    .test('is-after-now', 'Starting time must be after the current time', function (startTime) {
      const currentTime = new Date();
      let [startHour, startMinute] = startTime.split(':');
      let startDate = new Date()
      startDate.setHours(startHour, startMinute, 0, 0);
      if (!startTime) {
        return true;
      }
      return isAfter(startDate, currentTime) || isEqual(startDate, currentTime);
    }),
    endTime: yup.string()
    .required('Ending time is required')
    .test('is-after-start', 'Ending time must be after starting time', function (endTime) {
        const { startTime } = this.parent;
        if (!startTime || !endTime) {
          // If either field is empty, consider it valid to allow separate field-level validation
          return true;
        }
        return endTime > startTime;
      }),
   
})