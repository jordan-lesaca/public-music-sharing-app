class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  before_action :authorize

  private 
  
  def render_unprocessable_entity_response(invalid)
    render json: {errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def record_not_found
    render json: { error: "Not Found" }, status: :unauthorized
  end

  def authorize
    @current_user = User.find(session[:user_id]) 
    render json: { errors: "Not Authorized" }, 
    status: unauthorized unless @current_user
  end

end
