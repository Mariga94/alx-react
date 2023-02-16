import { fromJS } from './node_modules/immutable/dist/immutable';

const { Map } = require('immutable');

export default function getImmutableObject(object) {
    return fromJS(object)
}