import defaultLocale from '../../config/i18n';

export const  getLocaleFromPath = (path) => {
    if (path === '/') {
        return defaultLocale;
    }

    return path.split('/')[1];
};

export const switchHtmlLocale =  (locale: string) => {
    const html = window.document.documentElement;
    html.lang = locale;
};

export default getLocaleFromPath;