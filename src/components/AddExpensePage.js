import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';
import ExpenseImage from './ExpenseImage';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  };
  render() {
    return (
      <div className="add_expenses_header">
        <div className="page-header">
          <div className="content-container">
            <ExpenseImage />
            <h1 className="add_expenses__title">Add An Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
