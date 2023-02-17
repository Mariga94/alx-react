export default function accessImmutableObject(object, array) {
    for (const key in array) {
        return object[key].first
    }
}