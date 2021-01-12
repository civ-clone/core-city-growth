import { instance as additionalDataRegistryInstance } from '@civ-clone/core-data-object/AdditionalDataRegistry';
import growth from './AdditionalData/growth';

additionalDataRegistryInstance.register(...growth());
