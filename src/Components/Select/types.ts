export interface OptionType {
    value: string;
    title: string;
    subTitle: string;
    additionalInfo: string;
    logo: string;
}

export interface SelectProps {
    options: any;
    selectedOption: OptionType;
    selectOnChange: any;
    placeholder: string;
}
