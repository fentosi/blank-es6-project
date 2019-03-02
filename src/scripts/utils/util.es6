export class Util {
    static trim(value) {
        return Util.toStr(value).trim();
    }    

    static toStr(value) {
        return value.toString();
    }
}