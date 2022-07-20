import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import Counters from './components/counters';

createRoot(document.getElementById('root')).render(<Counters />);
