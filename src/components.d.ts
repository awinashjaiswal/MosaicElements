/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MosDrawer {
        "isBottomOpen": boolean;
        "isLeftOpen": boolean;
        "isRightOpen": boolean;
    }
    interface OcButton {
        "label": string;
        "shape": 'round' | 'circle' | 'default';
        "size": 'small' | 'medium' | 'large';
        "variant": 'outlined' | 'dashed' | 'solid' | 'filled' | 'text' | 'link';
    }
    interface OcCard {
    }
    interface OcCarousel {
    }
    interface OcCollapsible {
        "label": string;
    }
    interface OcColumn {
        "colSpan": string;
    }
    interface OcContainer {
        "backgroundImage": string;
        "parallax": boolean;
    }
    interface OcHeader {
    }
    interface OcHtmlEditor {
    }
    interface OcImg {
        "alt": string;
        "height": string;
        "src": string;
        "width": string;
    }
    interface OcInput {
        "label": string;
        "placeholder": string;
        "type": string;
        "value": string;
    }
    interface OcRow {
    }
    interface OcSpinner {
    }
    interface ScreenLayout {
    }
}
export interface OcButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLOcButtonElement;
}
export interface OcInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLOcInputElement;
}
declare global {
    interface HTMLMosDrawerElement extends Components.MosDrawer, HTMLStencilElement {
    }
    var HTMLMosDrawerElement: {
        prototype: HTMLMosDrawerElement;
        new (): HTMLMosDrawerElement;
    };
    interface HTMLOcButtonElementEventMap {
        "click": void;
    }
    interface HTMLOcButtonElement extends Components.OcButton, HTMLStencilElement {
        addEventListener<K extends keyof HTMLOcButtonElementEventMap>(type: K, listener: (this: HTMLOcButtonElement, ev: OcButtonCustomEvent<HTMLOcButtonElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLOcButtonElementEventMap>(type: K, listener: (this: HTMLOcButtonElement, ev: OcButtonCustomEvent<HTMLOcButtonElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLOcButtonElement: {
        prototype: HTMLOcButtonElement;
        new (): HTMLOcButtonElement;
    };
    interface HTMLOcCardElement extends Components.OcCard, HTMLStencilElement {
    }
    var HTMLOcCardElement: {
        prototype: HTMLOcCardElement;
        new (): HTMLOcCardElement;
    };
    interface HTMLOcCarouselElement extends Components.OcCarousel, HTMLStencilElement {
    }
    var HTMLOcCarouselElement: {
        prototype: HTMLOcCarouselElement;
        new (): HTMLOcCarouselElement;
    };
    interface HTMLOcCollapsibleElement extends Components.OcCollapsible, HTMLStencilElement {
    }
    var HTMLOcCollapsibleElement: {
        prototype: HTMLOcCollapsibleElement;
        new (): HTMLOcCollapsibleElement;
    };
    interface HTMLOcColumnElement extends Components.OcColumn, HTMLStencilElement {
    }
    var HTMLOcColumnElement: {
        prototype: HTMLOcColumnElement;
        new (): HTMLOcColumnElement;
    };
    interface HTMLOcContainerElement extends Components.OcContainer, HTMLStencilElement {
    }
    var HTMLOcContainerElement: {
        prototype: HTMLOcContainerElement;
        new (): HTMLOcContainerElement;
    };
    interface HTMLOcHeaderElement extends Components.OcHeader, HTMLStencilElement {
    }
    var HTMLOcHeaderElement: {
        prototype: HTMLOcHeaderElement;
        new (): HTMLOcHeaderElement;
    };
    interface HTMLOcHtmlEditorElement extends Components.OcHtmlEditor, HTMLStencilElement {
    }
    var HTMLOcHtmlEditorElement: {
        prototype: HTMLOcHtmlEditorElement;
        new (): HTMLOcHtmlEditorElement;
    };
    interface HTMLOcImgElement extends Components.OcImg, HTMLStencilElement {
    }
    var HTMLOcImgElement: {
        prototype: HTMLOcImgElement;
        new (): HTMLOcImgElement;
    };
    interface HTMLOcInputElementEventMap {
        "valueChanged": string;
    }
    interface HTMLOcInputElement extends Components.OcInput, HTMLStencilElement {
        addEventListener<K extends keyof HTMLOcInputElementEventMap>(type: K, listener: (this: HTMLOcInputElement, ev: OcInputCustomEvent<HTMLOcInputElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLOcInputElementEventMap>(type: K, listener: (this: HTMLOcInputElement, ev: OcInputCustomEvent<HTMLOcInputElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLOcInputElement: {
        prototype: HTMLOcInputElement;
        new (): HTMLOcInputElement;
    };
    interface HTMLOcRowElement extends Components.OcRow, HTMLStencilElement {
    }
    var HTMLOcRowElement: {
        prototype: HTMLOcRowElement;
        new (): HTMLOcRowElement;
    };
    interface HTMLOcSpinnerElement extends Components.OcSpinner, HTMLStencilElement {
    }
    var HTMLOcSpinnerElement: {
        prototype: HTMLOcSpinnerElement;
        new (): HTMLOcSpinnerElement;
    };
    interface HTMLScreenLayoutElement extends Components.ScreenLayout, HTMLStencilElement {
    }
    var HTMLScreenLayoutElement: {
        prototype: HTMLScreenLayoutElement;
        new (): HTMLScreenLayoutElement;
    };
    interface HTMLElementTagNameMap {
        "mos-drawer": HTMLMosDrawerElement;
        "oc-button": HTMLOcButtonElement;
        "oc-card": HTMLOcCardElement;
        "oc-carousel": HTMLOcCarouselElement;
        "oc-collapsible": HTMLOcCollapsibleElement;
        "oc-column": HTMLOcColumnElement;
        "oc-container": HTMLOcContainerElement;
        "oc-header": HTMLOcHeaderElement;
        "oc-html-editor": HTMLOcHtmlEditorElement;
        "oc-img": HTMLOcImgElement;
        "oc-input": HTMLOcInputElement;
        "oc-row": HTMLOcRowElement;
        "oc-spinner": HTMLOcSpinnerElement;
        "screen-layout": HTMLScreenLayoutElement;
    }
}
declare namespace LocalJSX {
    interface MosDrawer {
        "isBottomOpen"?: boolean;
        "isLeftOpen"?: boolean;
        "isRightOpen"?: boolean;
    }
    interface OcButton {
        "label"?: string;
        "onClick"?: (event: OcButtonCustomEvent<void>) => void;
        "shape"?: 'round' | 'circle' | 'default';
        "size"?: 'small' | 'medium' | 'large';
        "variant"?: 'outlined' | 'dashed' | 'solid' | 'filled' | 'text' | 'link';
    }
    interface OcCard {
    }
    interface OcCarousel {
    }
    interface OcCollapsible {
        "label"?: string;
    }
    interface OcColumn {
        "colSpan"?: string;
    }
    interface OcContainer {
        "backgroundImage"?: string;
        "parallax"?: boolean;
    }
    interface OcHeader {
    }
    interface OcHtmlEditor {
    }
    interface OcImg {
        "alt"?: string;
        "height"?: string;
        "src"?: string;
        "width"?: string;
    }
    interface OcInput {
        "label"?: string;
        "onValueChanged"?: (event: OcInputCustomEvent<string>) => void;
        "placeholder"?: string;
        "type"?: string;
        "value"?: string;
    }
    interface OcRow {
    }
    interface OcSpinner {
    }
    interface ScreenLayout {
    }
    interface IntrinsicElements {
        "mos-drawer": MosDrawer;
        "oc-button": OcButton;
        "oc-card": OcCard;
        "oc-carousel": OcCarousel;
        "oc-collapsible": OcCollapsible;
        "oc-column": OcColumn;
        "oc-container": OcContainer;
        "oc-header": OcHeader;
        "oc-html-editor": OcHtmlEditor;
        "oc-img": OcImg;
        "oc-input": OcInput;
        "oc-row": OcRow;
        "oc-spinner": OcSpinner;
        "screen-layout": ScreenLayout;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "mos-drawer": LocalJSX.MosDrawer & JSXBase.HTMLAttributes<HTMLMosDrawerElement>;
            "oc-button": LocalJSX.OcButton & JSXBase.HTMLAttributes<HTMLOcButtonElement>;
            "oc-card": LocalJSX.OcCard & JSXBase.HTMLAttributes<HTMLOcCardElement>;
            "oc-carousel": LocalJSX.OcCarousel & JSXBase.HTMLAttributes<HTMLOcCarouselElement>;
            "oc-collapsible": LocalJSX.OcCollapsible & JSXBase.HTMLAttributes<HTMLOcCollapsibleElement>;
            "oc-column": LocalJSX.OcColumn & JSXBase.HTMLAttributes<HTMLOcColumnElement>;
            "oc-container": LocalJSX.OcContainer & JSXBase.HTMLAttributes<HTMLOcContainerElement>;
            "oc-header": LocalJSX.OcHeader & JSXBase.HTMLAttributes<HTMLOcHeaderElement>;
            "oc-html-editor": LocalJSX.OcHtmlEditor & JSXBase.HTMLAttributes<HTMLOcHtmlEditorElement>;
            "oc-img": LocalJSX.OcImg & JSXBase.HTMLAttributes<HTMLOcImgElement>;
            "oc-input": LocalJSX.OcInput & JSXBase.HTMLAttributes<HTMLOcInputElement>;
            "oc-row": LocalJSX.OcRow & JSXBase.HTMLAttributes<HTMLOcRowElement>;
            "oc-spinner": LocalJSX.OcSpinner & JSXBase.HTMLAttributes<HTMLOcSpinnerElement>;
            "screen-layout": LocalJSX.ScreenLayout & JSXBase.HTMLAttributes<HTMLScreenLayoutElement>;
        }
    }
}
