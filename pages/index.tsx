import { useState, useCallback } from 'react';
import { NextPage } from 'next';

import { Page, Card, FormLayout, TextField } from '@shopify/polaris';
import { TitleBar } from '@shopify/app-bridge-react';
import ResourceListWithProducts from '../components/ResourceList';

interface IndexProps {}

const Index: NextPage<IndexProps> = () => {
  const [first, setFirst] = useState<string>('50');

  const handleChange = useCallback((newValue) => setFirst(newValue), []);

  return (
    <Page>
      <TitleBar
        title="asd2"
        primaryAction={{
          content: 'asd3',
          onAction: (): void => console.log('clicked'),
        }}
      />
      <Card sectioned>
        <FormLayout>
          <TextField
            label="asd4"
            value={first}
            onChange={handleChange}
          />
        </FormLayout>
      </Card>
      <ResourceListWithProducts first={parseInt(first)} />
    </Page>
  );
};

export default Index;
