import React from 'react';

import Message from '@tabler/icons/outline/message.svg?react';

import Button from '@shared/react/components/button';
import { useAxiosMutation } from '@shared/react/providers/axios';

import { GET_NORRIS_FACT } from '@/services/get_norrisFact';

const Norris = () => {
  const { isPending, mutateAsync } = useAxiosMutation(GET_NORRIS_FACT);

  return (
    <Button
      disabled={isPending}
      onClick={() => {
        mutateAsync({})
          .then(({ data: { value } }) => {
            window.alert(value);
          })
          .catch((err: Error) => {
            window.alert(err.message);
          });
      }}
      variant="secondary"
    >
      Get Norris Fact
      <Message height="90%" />
    </Button>
  );
};

export default Norris;
