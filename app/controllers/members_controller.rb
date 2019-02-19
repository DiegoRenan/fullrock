class MembersController < ApplicationController
    skip_before_action :verify_authenticity_token
    
    def index
        @members = Member.all
        @member = Member.new
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
