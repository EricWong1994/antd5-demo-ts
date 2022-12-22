import { InputHTMLAttributes, useLayoutEffect, useState } from 'react';
import useMergedState from 'rc-util/es/hooks/useMergedState';
interface ITextField
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onchange'> {
	/**
	 * onChange 函数
	 */
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function fixControlledValue<T>(value: T) {
	if (typeof value === 'undefined' || value === null) {
		return '';
	}
	return String(value);
}

const TextFieldV2: React.FC<ITextField> = props => {
	const { defaultValue, value, onChange, ...rest } = props;

	// 内部为受控状态控制 input 控件
	const [mergeState, setMergeState] = useMergedState('default value', {
		onChange: (currentValue, preValue) => {
			// default value12 当前value
			console.log(currentValue, '当前value');
			// default value 上一次value
			console.log(preValue, '上一次value');
		},
	});

	/**
	 * onChange 函数
	 * @param e
	 */
	const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		// 当 onChange 触发时，需要判断
		// 1. 如果当前外部传入 value === undefined ，此时表示为非受控模式。那么组件内部应该直接进行控件 value 值的切换
		// 2. 相反，如果组件外部传入 value !== undefined，此时表示为受控模式。那么组件内部的值应该由外部的 props 中的 value 决定而不应该自主切换。
		if (typeof value === 'undefined') {
			// 调用三次 setMergeState
			setMergeState(inputValue);
			setMergeState(inputValue + '1');
			setMergeState(inputValue + '2');
		}
		onChange && onChange(e);
	};

	/** 当外部 props.value 改变时，修改对应内部的 State  */
	// useLayoutEffect(() => {
	// 	if (value) setValue(value);
	// }, [value]);

	return (
		<input
			value={fixControlledValue(mergeState)}
			onChange={_onChange}
			{...rest}
		/>
	);
};

export default TextFieldV2;
