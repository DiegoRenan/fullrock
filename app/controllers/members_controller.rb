class MembersController < ApplicationController
    skip_before_action :verify_authenticity_token
    
    def index
        @members = Member.all.order("created_at DESC")
        respond_to do |format|
            format.html # index.html.erb
            format.xml  { render xml: @members }
            format.json { render json: @members }
        end
    end

    def create
        @member = Member.new(member_params)

        if @member.save
            render :json => @member.to_json
        else
            render :json => { :errors => @member.errors.full_messages }
        end
    end

    private
        def member_params
            params.require(:member).permit(:name, :email, :role)
        end
end
